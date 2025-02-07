

    
    //script for quill statement reveal
    function toggleMessage() {
      let textOne = document.querySelector(".openingstatement-one");
      let textTwo = document.querySelector(".openingstatement-two");

      if (textOne.style.opacity === "1") {
        // If already visible, fade both texts out, then hide them after 4s.
        textOne.style.opacity = "0";
        textTwo.style.opacity = "0";
    
        setTimeout(() => {
        textOne.style.visibility = "hidden";
        textTwo.style.visibility = "hidden";
        }, 4000); // Wait for the 4s fade-out to complete.
      } else {
        // Show the first text.
        textOne.style.visibility = "visible";
        textOne.style.opacity = "1";

        // After 6 seconds, start fading out the first text.
        setTimeout(() => {
          textOne.style.opacity = "0";

          // After the 4-second fade out, set its visibility to hidden.
          setTimeout(() => {
            textOne.style.visibility = "hidden";
          }, 4000);

          // Then show the second text.
          textTwo.style.visibility = "visible";
          textTwo.style.opacity = "1";

          // Fade out the second text after 6 seconds.
          setTimeout(() => {
            textTwo.style.opacity = "0";
            setTimeout(() => {
            textTwo.style.visibility = "hidden";
            }, 4000);
          }, 6000);
        }, 6000);
      }
    }
    
    //Quill SVG
    const svgCursor = `<svg
   width=100%
   height=100%
   viewBox="0 0 18.034536 18.034536"
   version="1.1"
   id="svg1"
   inkscape:version="1.4 (e7c3feb1, 2024-10-09)"
   sodipodi:docname="white-fractal-outline.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#525252"
     bordercolor="#f4f4f4"
     borderopacity="1"
     inkscape:showpageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="1"
     inkscape:deskcolor="#000000"
     inkscape:document-units="mm"
     inkscape:zoom="5.9548783"
     inkscape:cx="49.035427"
     inkscape:cy="61.378248"
     inkscape:window-width="1440"
     inkscape:window-height="872"
     inkscape:window-x="0"
     inkscape:window-y="28"
     inkscape:window-maximized="0"
     inkscape:current-layer="g5"
     showgrid="true">
    <inkscape:grid
       id="grid1"
       units="mm"
       originx="44"
       originy="44"
       spacingx="0.77456848"
       spacingy="0.77456848"
       empcolor="#0099e5"
       empopacity="0.30196078"
       color="#0099e5"
       opacity="0.14901961"
       empspacing="5"
       enabled="true"
       visible="true" />
  </sodipodi:namedview>
  <defs
     id="defs1" />
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <g
       id="g93"
       transform="matrix(1.1350581,0,0,1.2974148,0.18485486,-1.3076768)">
      <g
         id="g1"
         transform="matrix(0.83460948,-0.27910615,0.3644546,0.83413401,-5.137302,2.6440145)">
        <g
           id="g2"
           transform="matrix(1.0929799,-0.14958901,0.1730857,0.96788002,-3.1883879,0.41821229)">
          <g
             id="g7"
             transform="matrix(0.88543158,0,0,0.88543158,0.86718563,0.341079)">
            <g
               id="g10"
               transform="matrix(0.99996116,0.00853096,-0.00873109,0.99996435,1.2751699,0.75673656)">
              <g
                 id="g3"
                 transform="matrix(-0.45412738,-0.76178573,0.77965629,-0.45441224,1.9187492,19.241119)"
                 inkscape:transform-center-y="0.0067814048"
                 inkscape:transform-center-x="-2.0553045">
                <g
                   id="g5"
                   transform="matrix(-0.49803052,-0.86109306,0.8752806,-0.47886522,-3.2236981,24.878814)"
                   inkscape:transform-center-x="-2.1135443"
                   inkscape:transform-center-y="-0.058746621">
                  <g
                     id="g6"
                     transform="matrix(0.99937459,-0.03513686,0.03596113,0.99936145,-0.30780562,0.09718909)"
                     style="stroke:#030202;stroke-width:0.1907;stroke-dasharray:1.1442, 1.1442;stroke-dashoffset:0;stroke-opacity:0.800562;paint-order:markers fill stroke" />
                  <circle
                     style="fill:#fefefe;fill-opacity:0;stroke:#f9f9f9;stroke-width:0.311927;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:stroke markers fill"
                     id="circle11"
                     cx="8.4541531"
                     cy="2.334625"
                     r="0.4727864" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.249896;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:stroke markers fill"
                     id="circle15"
                     cx="10.32197"
                     cy="5.775104"
                     r="0.56520724" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.142671;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle20"
                     cx="9.0732174"
                     cy="2.7610905"
                     r="0.18784215" />
                  <circle
                     style="fill:#fdfdfd;fill-opacity:0;stroke:#ffffff;stroke-width:0.13381;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle21"
                     cx="8.4530334"
                     cy="1.6134526"
                     r="0.15790921" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.142671;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle22"
                     cx="7.8350916"
                     cy="2.7702618"
                     r="0.18784215" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.150647;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle23"
                     cx="6.656579"
                     cy="4.8934193"
                     r="0.21593525" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.140899;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle24"
                     cx="7.3755746"
                     cy="5.9520502"
                     r="0.18382885" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.171914;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle25"
                     cx="5.827085"
                     cy="6.4363317"
                     r="0.2924237" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.176345;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle26"
                     cx="11.063338"
                     cy="6.4346638"
                     r="0.30824113" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.141785;stroke-linecap:square;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle27"
                     cx="9.4927006"
                     cy="5.991322"
                     r="0.18615083" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#fefefe;stroke-width:0.150647;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle28"
                     cx="10.273047"
                     cy="4.8934193"
                     r="0.21593525" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.176345;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle29"
                     cx="13.690605"
                     cy="10.958565"
                     r="0.30824113" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.170142;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle30"
                     cx="3.2321386"
                     cy="11.025434"
                     r="0.28643969" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.150647;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle31"
                     cx="14.644843"
                     cy="12.413325"
                     r="0.21593525" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.150647;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle32"
                     cx="2.3083503"
                     cy="12.459485"
                     r="0.21593525" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.140899;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle33"
                     cx="3.5622051"
                     cy="12.544758"
                     r="0.18382885" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.141785;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle34"
                     cx="13.40626"
                     cy="12.50806"
                     r="0.18948804" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.14533;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle35"
                     cx="12.331689"
                     cy="14.352871"
                     r="0.2002098" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.140899;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle36"
                     cx="4.6917095"
                     cy="14.43962"
                     r="0.18382885" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.171028;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle37"
                     cx="11.184078"
                     cy="15.444412"
                     r="0.28639987" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.171914;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle38"
                     cx="5.7820678"
                     cy="15.481514"
                     r="0.29079998" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.150647;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle39"
                     cx="4.1094465"
                     cy="15.647326"
                     r="0.21593525" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.150647;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle40"
                     cx="12.824825"
                     cy="15.533645"
                     r="0.21593525" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.141785;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle41"
                     cx="15.275971"
                     cy="15.553578"
                     r="0.18784215" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.142671;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle42"
                     cx="15.892797"
                     cy="14.496164"
                     r="0.18784215" />
                  <circle
                     style="fill:#fffffe;fill-opacity:0;stroke:#ffffff;stroke-width:0.135582;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle43"
                     cx="16.582335"
                     cy="15.607188"
                     r="0.16600087" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.142671;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle44"
                     cx="1.7153809"
                     cy="15.590096"
                     r="0.18784215" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.141785;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle45"
                     cx="1.0985563"
                     cy="14.522717"
                     r="0.18784215" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.135582;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:fill markers stroke"
                     id="circle46"
                     cx="0.40856022"
                     cy="15.631272"
                     r="0.1660407" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.249896;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:stroke markers fill"
                     id="circle55"
                     cx="4.8863821"
                     cy="15.225757"
                     r="0.56520724" />
                  <circle
                     style="fill:#fefeff;fill-opacity:0;stroke:#ffffff;stroke-width:0.249896;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:stroke markers fill"
                     id="circle56"
                     cx="3.0004785"
                     cy="11.963379"
                     r="0.56520724" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.338512;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:stroke markers fill"
                     id="circle57"
                     cx="6.5528297"
                     cy="5.7755084"
                     r="0.56520724" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#fefeff;stroke-width:0.249896;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:stroke markers fill"
                     id="circle58"
                     cx="13.931936"
                     cy="11.872995"
                     r="0.56520724" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.249896;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:stroke markers fill"
                     id="circle59"
                     cx="12.074196"
                     cy="15.202332"
                     r="0.56520724" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.311927;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:stroke markers fill"
                     id="circle60"
                     cx="1.0415008"
                     cy="15.276528"
                     r="0.4727864" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0;stroke:#ffffff;stroke-width:0.223311;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:4.8892;stroke-opacity:1;paint-order:stroke markers fill"
                     id="circle61"
                     cx="15.953199"
                     cy="15.241971"
                     r="0.4727864" />
                  <circle
                     style="fill:#ffffff;fill-opacity:0.00561799;stroke:#fffefe;stroke-width:0.523718;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:3.7;stroke-dasharray:1.04744, 0.523718, 0.261859, 0.523718;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers"
                     id="path8"
                     cx="8.4579325"
                     cy="10.955745"
                     r="4.7584777" />
                  <g
                     id="g91"
                     transform="matrix(1.5481105,0,0,1.5481105,-4.6487516,4.0112281)"
                     style="fill:#ffffff;fill-opacity:0.00561799;stroke:#ffffff;stroke-width:0.379275;stroke-linecap:butt;stroke-dasharray:0.75855, 0.379275, 0.189637, 0.379275;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke markers fill">
                    <circle
                       style="fill:#ffffff;fill-opacity:0.00561799;stroke:#ffffff;stroke-width:0.379275;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:0.75855, 0.379275, 0.189637, 0.379275;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke markers fill"
                       id="circle89"
                       cx="8.4651575"
                       cy="4.4865222"
                       r="1.541134" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>
`;


    // Global flag for whether the cursor is over a hover-target element
    let isHovering = false;

    // Custom cursor element
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    customCursor.innerHTML = svgCursor;  // SVG cursor string (without the XML declaration)
    document.body.appendChild(customCursor);

    //START: STROBOSCOPIC EFFECT OF CUSTOM SVG CURSOR
    // Function to create a trail (ghost) element at a given position
    function createTrail(x, y) {
      const trail = document.createElement('div');
      trail.classList.add('cursor-trail');
      trail.innerHTML = svgCursor;
      trail.style.left = x + 'px';
      trail.style.top = y + 'px';
      document.body.appendChild(trail);

      // Remove the trail element after its animation completes (2 seconds)
      setTimeout(() => {
        trail.remove();
      }, 2000);
    }

    // Listen for mouse movement
    document.addEventListener('mousemove', e => {
      // Update the custom cursor position
      customCursor.style.left = e.clientX + 'px';
      customCursor.style.top = e.clientY + 'px';
      // Only create a trail if not hovering over a target element
      if (!isHovering) {
      createTrail(e.clientX, e.clientY);
      }
    });
    //END: STROBOSCOPIC EFFECT OF CUSTOM SVG CURSOR

    //START: ROTATION ON HOVER AND EASE OUT UPON MOUSELEAVE
    // Helper function to extract the current rotation in degrees
    function getRotationDegrees(el) {
      const st = window.getComputedStyle(el);
      const tr = st.getPropertyValue("transform");
      if (tr === "none") return 0;
      // The transform is in matrix format: matrix(a, b, c, d, e, f)
      const values = tr.split('(')[1].split(')')[0].split(',');
      const a = parseFloat(values[0]);
      const b = parseFloat(values[1]);
      // Calculate the rotation angle in degrees.
      let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
      if (angle < 0) angle += 360;
      return angle;
    }

    function handleMouseEnter() {
      isHovering = true;
      // Remove any inline transition so the animation runs freely.
      customCursor.style.transition = '';
      // Reset transform to ensure the rotation animation starts correctly.
      customCursor.style.transform = 'translate(-50%, -50%)';
      // Add the continuous rotation animation class.
      customCursor.classList.add('rotate-cursor');
    }

    function handleMouseLeave() {
      isHovering = false;
      // Get the current rotation angle from the computed style.
      const currentAngle = getRotationDegrees(customCursor);
      // Remove the continuous rotation animation.
      customCursor.classList.remove('rotate-cursor');
      // Force a reflow so the removal is registered.
      void customCursor.offsetWidth;
      // Set an inline transform to "freeze" the current rotation.
      customCursor.style.transform = `translate(-50%, -50%) rotate(${currentAngle}deg)`;
      // Force a reflow.
      void customCursor.offsetWidth;
      // Determine the target angle.
      // If we're exactly at a multiple of 360, add a full extra rotation
      // so that the transition is visible.
      let targetAngle;
      if (currentAngle % 360 === 0) {
        targetAngle = currentAngle + 360;
      } else {
        // Round up to the next multiple of 360.
        targetAngle = Math.ceil(currentAngle / 360) * 360;
      }
      // Calculate the difference in angle.
      const angleDiff = targetAngle - currentAngle;
      // If a full rotation (360°) takes 5s in our animation,
      // the duration is proportional to the angle difference.
      const duration = (angleDiff / 360) * 5;
      // Apply the transition.
      customCursor.style.transition = `transform ${duration}s ease-out`;
      // Now set the transform to the target angle.
      customCursor.style.transform = `translate(-50%, -50%) rotate(${targetAngle}deg)`;
    }

    // Attach the event listeners to elements that should trigger the hover effect.
    document.querySelectorAll('.hover-target').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    //END: ROTATION ON HOVER AND EASE OUT UPON MOUSELEAVE

    //START: CURSOR CLICK ANIMATION
    function animateToCenter() {
    const svg = customCursor.querySelector('svg');
    if (!svg) return;

    // Reference element anchor for centering.
    const refElem = svg.querySelector('#path8'); 
    if (!refElem) {
      console.error('Reference element not found.');
    return;
    }

    // Compute the center of the reference element using its bounding rect.
    const refRect = refElem.getBoundingClientRect();
    const refCenterX = refRect.left + refRect.width / 2;
    const refCenterY = refRect.top + refRect.height / 2;

    // Select the pieces you want to center.
    const pieces = svg.querySelectorAll(
      '#path7, #g6, ' +
      '#path4, #path5, #path6, #circle11, #circle15, #circle20, ' +
      '#circle21, #circle22, #circle23, #circle24, #circle25, ' +
      '#circle26, #circle27, #circle28, #circle29, #circle30, ' +
      '#circle31, #circle32, #circle33, #circle34, #circle35, ' +
      '#circle36, #circle37, #circle38, #circle39, #circle40, ' +
      '#circle41, #circle42, #circle43, #circle44, #circle45, ' +
      '#circle46, #circle55, #circle56, #circle57, #circle58, ' +
      '#circle59, #circle60, #circle61, #g85, #circle8, ' +
      '#g4, #circle85, #g91, #path9, #path10'
    );

    pieces.forEach(elem => {
      // Store the element's original transform if not already stored.
      if (!elem.dataset.originalTransform) {
        elem.dataset.originalTransform = elem.getAttribute('transform') || '';
      }

      // Compute the element's center using getBoundingClientRect()
      const elemRect = elem.getBoundingClientRect();
      const elemCenterX = elemRect.left + elemRect.width / 2;
      const elemCenterY = elemRect.top + elemRect.height / 2;

      // Calculate the translation needed
      const dx = refCenterX - elemCenterX;
      const dy = refCenterY - elemCenterY;

      console.log(`Element ${elem.id} dx: ${dx}, dy: ${dy}`);

      // Apply the translation with a transition for smooth animation.
      elem.style.transition = 'transform 0.5s ease';
      // Compose the original transform with the new translation.
      elem.style.transform = `${elem.dataset.originalTransform} translate(${dx}px, ${dy}px)`;
    });
  }

    //START: Function to reverse the animation after click/hold (reset the transform).
    function resetAnimation() {
      const svg = customCursor.querySelector('svg');
      if (!svg) return;

      const pieces = svg.querySelectorAll(
      '#path7, #g6, ' +
      '#path4, #path5, #path6, #circle11, #circle15, #circle20, ' +
      '#circle21, #circle22, #circle23, #circle24, #circle25, ' +
      '#circle26, #circle27, #circle28, #circle29, #circle30, ' +
      '#circle31, #circle32, #circle33, #circle34, #circle35, ' +
      '#circle36, #circle37, #circle38, #circle39, #circle40, ' +
      '#circle41, #circle42, #circle43, #circle44, #circle45, ' +
      '#circle46, #circle55, #circle56, #circle57, #circle58, ' +
      '#circle59, #circle60, #circle61, #g85, #circle8, ' +
      ' #g4, #circle85, #g91, #path9, #path10'
      );

      pieces.forEach(elem => {
        elem.style.transition = 'transform 0.5s ease';
        // Revert to the original transform stored in the dataset.
        elem.style.transform = elem.dataset.originalTransform;
      });
    }

    // Attach events to click event
    document.addEventListener('mousedown', () => {
      animateToCenter();
    });

    document.addEventListener('mouseup', () => {
      // Wait 1 second before reversing the animation.
      setTimeout(() => {
        resetAnimation();
      }, 1000);
    });
    //END: CURSOR CLICK ANIMATION
