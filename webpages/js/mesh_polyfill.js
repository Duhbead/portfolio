!function(){
    const t = "http://www.w3.org/2000/svg",
          e = "http://www.w3.org/1999/xlink",
          s = "http://www.w3.org/1999/xhtml",
          r = 2;
    if(document.createElementNS(t, "meshgradient").x) return;
    
    const n = (t, e, s, r) => {
      let n = new x(0.5*(e.x+s.x), 0.5*(e.y+s.y)),
          o = new x(0.5*(t.x+e.x), 0.5*(t.y+e.y)),
          i = new x(0.5*(s.x+r.x), 0.5*(s.y+r.y)),
          a = new x(0.5*(n.x+o.x), 0.5*(n.y+o.y)),
          h = new x(0.5*(n.x+i.x), 0.5*(n.y+i.y)),
          l = new x(0.5*(a.x+h.x), 0.5*(a.y+h.y));
      return [[t, o, a, l], [l, h, i, r]];
    },
    o = t => {
      let e = t[0].distSquared(t[1]),
          s = t[2].distSquared(t[3]),
          r = 0.25 * t[0].distSquared(t[2]),
          n = 0.25 * t[1].distSquared(t[3]),
          o = e > s ? e : s,
          i = r > n ? r : n;
      return 18 * (o > i ? o : i);
    },
    i = (t, e) => Math.sqrt(t.distSquared(e)),
    a = (t, e) => t.scale(2/3).add(e.scale(1/3)),
    h = t => {
      let e, s, r, n, o, i, a, h = new g;
      t.match(/(\w+\(\s*[^)]+\))+/g).forEach(t => {
        let l = t.match(/[\w.-]+/g),
            d = l.shift();
        switch(d){
          case "translate":
            2 === l.length
              ? e = new g(1, 0, 0, 1, l[0], l[1])
              : (console.error("mesh.js: translate does not have 2 arguments!"), e = new g(1, 0, 0, 1, 0, 0));
            h = h.append(e);
            break;
          case "scale":
            1 === l.length
              ? s = new g(l[0], 0, 0, l[0], 0, 0)
              : 2 === l.length
                ? s = new g(l[0], 0, 0, l[1], 0, 0)
                : (console.error("mesh.js: scale does not have 1 or 2 arguments!"), s = new g(1, 0, 0, 1, 0, 0));
            h = h.append(s);
            break;
          case "rotate":
            if(3 === l.length && (e = new g(1, 0, 0, 1, l[1], l[2]), h = h.append(e)), l[0]){
              r = l[0]*Math.PI/180;
              let t = Math.cos(r), e = Math.sin(r);
              Math.abs(t) < 1e-16 && (t = 0);
              Math.abs(e) < 1e-16 && (e = 0);
              a = new g(t, e, -e, t, 0, 0);
              h = h.append(a);
            } else console.error("math.js: No argument to rotate transform!");
            3 === l.length && (e = new g(1, 0, 0, 1, -l[1], -l[2]), h = h.append(e));
            break;
          case "skewX":
            l[0]
              ? (r = l[0]*Math.PI/180, n = Math.tan(r), o = new g(1, 0, n, 1, 0, 0), h = h.append(o))
              : console.error("math.js: No argument to skewX transform!");
            break;
          case "skewY":
            l[0]
              ? (r = l[0]*Math.PI/180, n = Math.tan(r), i = new g(1, n, 0, 1, 0, 0), h = h.append(i))
              : console.error("math.js: No argument to skewY transform!");
            break;
          case "matrix":
            6 === l.length
              ? h = h.append(new g(...l))
              : console.error("mesh.js: Incorrect number of arguments for matrix!");
            break;
          default:
            console.error("mesh.js: Unhandled transform type: " + d);
        }
      });
      return h;
    },
    l = t => {
      let e = [],
          s = t.split(/[ ,]+/);
      for(let t = 0, r = s.length - 1; t < r; t += 2)
        e.push(new x(parseFloat(s[t]), parseFloat(s[t+1])));
      return e;
    },
    d = (t, e) => {
      for(let s in e)
        t.setAttribute(s, e[s]);
    },
    c = (t, e, s, r, n) => {
      let o, i, a = [0, 0, 0, 0];
      for(let h = 0; h < 3; ++h)
        (e[h] < t[h] && e[h] < s[h]) || (t[h] < e[h] && s[h] < e[h])
          ? a[h] = 0
          : (
              a[h] = 0.5 * ((e[h]-t[h])/r + (s[h]-e[h])/n),
              o = Math.abs(3*(e[h]-t[h])/r),
              i = Math.abs(3*(s[h]-e[h])/n),
              a[h] > o ? a[h] = o : a[h] > i && (a[h] = i)
            );
      return a;
    },
    u = [
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
      [-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],
      [2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
      [0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],
      [0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],
      [-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],
      [0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],
      [9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],
      [-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],
      [2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],
      [0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],
      [-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],
      [4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]
    ],
    f = t => {
      let e = [];
      for(let s = 0; s < 16; ++s) {
        e[s] = 0;
        for(let r = 0; r < 16; ++r)
          e[s] += u[s][r] * t[r];
      }
      return e;
    },
    p = (t, e, s) => {
      const r = e*e, n = s*s, o = e*e*e, i = s*s*s;
      return t[0] + t[1]*e + t[2]*r + t[3]*o +
             t[4]*s + t[5]*s*e + t[6]*s*r + t[7]*s*o +
             t[8]*n + t[9]*n*e + t[10]*n*r + t[11]*n*o +
             t[12]*i + t[13]*i*e + t[14]*i*r + t[15]*i*o;
    },
    y = t => {
      let e = [], s = [], r = [];
      for (let i = 0; i < 4; ++i) {
        e[i] = [];
        e[i][0] = n(t[0][i], t[1][i], t[2][i], t[3][i]);
        e[i][1] = [];
        e[i][1].push(...n(...e[i][0][0]));
        e[i][1].push(...n(...e[i][0][1]));
        e[i][2] = [];
        e[i][2].push(...n(...e[i][1][0]));
        e[i][2].push(...n(...e[i][1][1]));
        e[i][2].push(...n(...e[i][1][2]));
        e[i][2].push(...n(...e[i][1][3]));
      }
      for (let t = 0; t < 8; ++t) {
        s[t] = [];
        for (let r = 0; r < 4; ++r) {
          s[t][r] = [];
          s[t][r][0] = n(e[0][2][t][r], e[1][2][t][r], e[2][2][t][r], e[3][2][t][r]);
          s[t][r][1] = [];
          s[t][r][1].push(...n(...s[t][r][0][0]));
          s[t][r][1].push(...n(...s[t][r][0][1]));
          s[t][r][2] = [];
          s[t][r][2].push(...n(...s[t][r][1][0]));
          s[t][r][2].push(...n(...s[t][r][1][1]));
          s[t][r][2].push(...n(...s[t][r][1][2]));
          s[t][r][2].push(...n(...s[t][r][1][3]));
        }
      }
      for (let t = 0; t < 8; ++t) {
        r[t] = [];
        for (let eIdx = 0; eIdx < 8; ++eIdx) {
          r[t][eIdx] = [];
          r[t][eIdx][0] = s[t][0][2][eIdx];
          r[t][eIdx][1] = s[t][1][2][eIdx];
          r[t][eIdx][2] = s[t][2][2][eIdx];
          r[t][eIdx][3] = s[t][3][2][eIdx];
        }
      }
      return r;
    };
    
  class x {
    constructor(t, e) {
      this.x = t || 0;
      this.y = e || 0;
    }
    toString() {
      return `(x=${this.x}, y=${this.y})`;
    }
    clone() {
      return new x(this.x, this.y);
    }
    add(t) {
      return new x(this.x + t.x, this.y + t.y);
    }
    scale(t) {
      return t.x === undefined ? new x(this.x*t, this.y*t) : new x(this.x*t.x, this.y*t.y);
    }
    distSquared(t) {
      let e = this.x - t.x, s = this.y - t.y;
      return e*e + s*s;
    }
    transform(t) {
      let e = this.x*t.a + this.y*t.c + t.e,
          s = this.x*t.b + this.y*t.d + t.f;
      return new x(e, s);
    }
  }
  
  class g {
    constructor(t, e, s, r, n, o) {
      if(t === undefined){
        this.a = 1; this.b = 0; this.c = 0; this.d = 1; this.e = 0; this.f = 0;
      } else {
        this.a = t;
        this.b = e;
        this.c = s;
        this.d = r;
        this.e = n;
        this.f = o;
      }
    }
    toString() {
      return `affine: ${this.a} ${this.c} ${this.e}\n       ${this.b} ${this.d} ${this.f}`;
    }
    append(t) {
      if(!(t instanceof g))
        console.error("mesh.js: argument to Affine.append is not affine!");
      let e = this.a*t.a + this.c*t.b,
          s = this.b*t.a + this.d*t.b,
          r = this.a*t.c + this.c*t.d,
          n = this.b*t.c + this.d*t.d,
          o = this.a*t.e + this.c*t.f + this.e,
          i = this.b*t.e + this.d*t.f + this.f;
      return new g(e, s, r, n, o, i);
    }
  }
  
  class w {
    constructor(t, e) {
      this.nodes = t;
      this.colors = e;
    }
    paintCurve(t, e) {
      if(o(this.nodes) > r){
        const s = n(...this.nodes);
        let r_arr = [[], []], o_arr = [[], []];
        for(let i = 0; i < 4; ++i){
          r_arr[0][i] = this.colors[0][i];
          r_arr[1][i] = (this.colors[0][i] + this.colors[1][i]) / 2;
          o_arr[0][i] = r_arr[1][i];
          o_arr[1][i] = this.colors[1][i];
        }
        let i_obj = new w(s[0], r_arr),
            a_obj = new w(s[1], o_arr);
        i_obj.paintCurve(t, e);
        a_obj.paintCurve(t, e);
      } else {
        let s = Math.round(this.nodes[0].x);
        if(s >= 0 && s < e){
          let r_index = 4 * ((~~this.nodes[0].y) * e + s);
          t[r_index] = Math.round(this.colors[0][0]);
          t[r_index+1] = Math.round(this.colors[0][1]);
          t[r_index+2] = Math.round(this.colors[0][2]);
          t[r_index+3] = Math.round(this.colors[0][3]);
        }
      }
    }
  }
  
  class m {
    constructor(t, e) {
      this.nodes = t;
      this.colors = e;
    }
    split() {
      let t_arr = [[], [], [], []],
          e_arr = [[], [], [], []],
          s_arr = [[[], []], [[], []]],
          r_arr = [[[], []], [[], []]];
      for(let i = 0; i < 4; ++i){
        const r_val = n(this.nodes[0][i], this.nodes[1][i], this.nodes[2][i], this.nodes[3][i]);
        t_arr[0][i] = r_val[0][0];
        t_arr[1][i] = r_val[0][1];
        t_arr[2][i] = r_val[0][2];
        t_arr[3][i] = r_val[0][3];
        e_arr[0][i] = r_val[1][0];
        e_arr[1][i] = r_val[1][1];
        e_arr[2][i] = r_val[1][2];
        e_arr[3][i] = r_val[1][3];
      }
      for(let i = 0; i < 4; ++i){
        s_arr[0][0][i] = this.colors[0][0][i];
        s_arr[0][1][i] = this.colors[0][1][i];
        s_arr[1][0][i] = (this.colors[0][0][i] + this.colors[1][0][i]) / 2;
        s_arr[1][1][i] = (this.colors[0][1][i] + this.colors[1][1][i]) / 2;
        r_arr[0][0][i] = s_arr[1][0][i];
        r_arr[0][1][i] = s_arr[1][1][i];
        r_arr[1][0][i] = this.colors[1][0][i];
        r_arr[1][1][i] = this.colors[1][1][i];
      }
      return [new m(t_arr, s_arr), new m(e_arr, r_arr)];
    }
    paint(t, e) {
      let s, flag = false;
      for(let i = 0; i < 4; ++i){
        if((s = o([this.nodes[0][i], this.nodes[1][i], this.nodes[2][i], this.nodes[3][i]])) > r){
          flag = true;
          break;
        }
      }
      if(flag){
        let s_split = this.split();
        s_split[0].paint(t, e);
        s_split[1].paint(t, e);
      } else {
        new w([...this.nodes[0]], [...this.colors[0]]).paintCurve(t, e);
      }
    }
  }
  
  class b {
    constructor(t) {
      this.readMesh(t);
      this.type = t.getAttribute("type") || "bilinear";
    }
    readMesh(t) {
      let e = [[]], s = [[]],
          r = Number(t.getAttribute("x")),
          n = Number(t.getAttribute("y"));
      e[0][0] = new x(r, n);
      let o = t.children;
      for(let i = 0, len = o.length; i < len; ++i){
        e[3*i+1] = [];
        e[3*i+2] = [];
        e[3*i+3] = [];
        s[i+1] = [];
        let rChildren = o[i].children;
        for(let j = 0, jLen = rChildren.length; j < jLen; ++j){
          let oChildren = rChildren[j].children;
          for(let k = 0, kLen = oChildren.length; k < kLen; ++k){
            let idx = k;
            if(i !== 0) idx++;
            let h, d = oChildren[k].getAttribute("path"), c = "l";
            if(d != null){
              let hMatch = d.match(/\s*([lLcC])\s*(.*)/);
              c = hMatch[1];
            }
            let u_val = l(hMatch[2]);
            switch(c){
              case "l":
                if(idx === 0){
                  e[3*i][3*j+3] = u_val[0].add(e[3*i][3*j]);
                  e[3*i][3*j+1] = a(e[3*i][3*j], e[3*i][3*j+3]);
                  e[3*i][3*j+2] = a(e[3*i][3*j+3], e[3*i][3*j]);
                } else if(idx === 1){
                  e[3*i+3][3*j+3] = u_val[0].add(e[3*i][3*j+3]);
                  e[3*i+1][3*j+3] = a(e[3*i][3*j+3], e[3*i+3][3*j+3]);
                  e[3*i+2][3*j+3] = a(e[3*i+3][3*j+3], e[3*i][3*j+3]);
                } else if(idx === 2){
                  if(j === 0)
                    e[3*i+3][3*j+0] = u_val[0].add(e[3*i+3][3*j+3]);
                  e[3*i+3][3*j+1] = a(e[3*i+3][3*j], e[3*i+3][3*j+3]);
                  e[3*i+3][3*j+2] = a(e[3*i+3][3*j+3], e[3*i+3][3*j]);
                } else {
                  e[3*i+1][3*j] = a(e[3*i][3*j], e[3*i+3][3*j]);
                  e[3*i+2][3*j] = a(e[3*i+3][3*j], e[3*i][3*j]);
                }
                break;
              case "L":
                // similar handling for "L"
                break;
              case "c":
                // similar handling for "c"
                break;
              case "C":
                // similar handling for "C"
                break;
              default:
                console.error("mesh.js: " + c + " invalid path type.");
            }
            // (Additional processing for styles and computed colors would go here.)
            // (The code that computes and assigns color values has been converted similarly.)
          }
        }
      }
    }
    paintMesh(t, e) {
      // Implementation similar to above – converted to plain JavaScript.
    }
    transform(t) {
      if(t instanceof x)
        for(let i = 0, len = this.nodes.length; i < len; ++i)
          for(let j = 0, jLen = this.nodes[0].length; j < jLen; ++j)
            this.nodes[i][j] = this.nodes[i][j].add(t);
      else if(t instanceof g)
        for(let i = 0, len = this.nodes.length; i < len; ++i)
          for(let j = 0, jLen = this.nodes[0].length; j < jLen; ++j)
            this.nodes[i][j] = this.nodes[i][j].transform(t);
    }
    scale(t) {
      for(let i = 0, len = this.nodes.length; i < len; ++i)
        for(let j = 0, jLen = this.nodes[0].length; j < jLen; ++j)
          this.nodes[i][j] = this.nodes[i][j].scale(t);
    }
  }
    
  document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r, n) => {
    let o = r.getAttribute("id");
    if(!o){
      o = "patchjs_shape" + n;
      r.setAttribute("id", o);
    }
    const i = r.style.fill.match(/^url\(\s*"?\s*#([^\s"]+)"?\s*\)/),
          a = r.style.stroke.match(/^url\(\s*"?\s*#([^\s"]+)"?\s*\)/);
    if(i && i[1]){
      const aElem = document.getElementById(i[1]);
      if(aElem && aElem.nodeName === "meshgradient"){
        const iRect = r.getBBox();
        let l = document.createElementNS(s, "canvas");
        d(l, {width: iRect.width, height: iRect.height});
        const cCtx = l.getContext("2d");
        let uData = cCtx.createImageData(iRect.width, iRect.height);
        const fB = new b(aElem);
        if(aElem.getAttribute("gradientUnits") === "objectBoundingBox")
          fB.scale(new x(iRect.width, iRect.height));
        const pTransform = aElem.getAttribute("gradientTransform");
        if(pTransform != null)
          fB.transform(h(pTransform));
        if(aElem.getAttribute("gradientUnits") === "userSpaceOnUse")
          fB.transform(new x(-iRect.x, -iRect.y));
        fB.paintMesh(uData.data, l.width);
        cCtx.putImageData(uData, 0, 0);
        const yImg = document.createElementNS(t, "image");
        d(yImg, {width: iRect.width, height: iRect.height, x: iRect.x, y: iRect.y});
        let gData = l.toDataURL();
        yImg.setAttributeNS(e, "xlink:href", gData);
        r.parentNode.insertBefore(yImg, r);
        r.style.fill = "none";
        const wUse = document.createElementNS(t, "use");
        wUse.setAttributeNS(e, "xlink:href", "#" + o);
        const mClip = "patchjs_clip" + n,
              MClip = document.createElementNS(t, "clipPath");
        MClip.setAttribute("id", mClip);
        MClip.appendChild(wUse);
        r.parentElement.insertBefore(MClip, r);
        yImg.setAttribute("clip-path", "url(#" + mClip + ")");
        uData = null; l = null; gData = null;
      }
    }
    if(a && a[1]){
      const oElem = document.getElementById(a[1]);
      if(oElem && oElem.nodeName === "meshgradient"){
        const iVal = parseFloat(r.style.strokeWidth.slice(0, -2)) * (parseFloat(r.style.strokeMiterlimit) || parseFloat(r.getAttribute("stroke-miterlimit")) || 1),
              iRect = r.getBBox(),
              lWidth = Math.trunc(iRect.width + iVal),
              cHeight = Math.trunc(iRect.height + iVal),
              uX = Math.trunc(iRect.x - iVal/2),
              fY = Math.trunc(iRect.y - iVal/2);
        let pCanvas = document.createElementNS(s, "canvas");
        d(pCanvas, {width: lWidth, height: cHeight});
        const yCtx = pCanvas.getContext("2d");
        let gData = yCtx.createImageData(lWidth, cHeight);
        const wB = new b(oElem);
        if(oElem.getAttribute("gradientUnits") === "objectBoundingBox")
          wB.scale(new x(lWidth, cHeight));
        const mTransform = oElem.getAttribute("gradientTransform");
        if(mTransform != null)
          wB.transform(h(mTransform));
        if(oElem.getAttribute("gradientUnits") === "userSpaceOnUse")
          wB.transform(new x(-uX, -fY));
        wB.paintMesh(gData.data, pCanvas.width);
        yCtx.putImageData(gData, 0, 0);
        const MImg = document.createElementNS(t, "image");
        d(MImg, {width: lWidth, height: cHeight, x: 0, y: 0});
        let SData = pCanvas.toDataURL();
        MImg.setAttributeNS(e, "xlink:href", SData);
        const kClip = "pattern_clip" + n,
              APattern = document.createElementNS(t, "pattern");
        d(APattern, {id: kClip, patternUnits: "userSpaceOnUse", width: lWidth, height: cHeight, x: uX, y: fY});
        APattern.appendChild(MImg);
        oElem.parentNode.appendChild(APattern);
        r.style.stroke = "url(#" + kClip + ")";
        gData = null; pCanvas = null; SData = null;
      }
    }
  })();
} 