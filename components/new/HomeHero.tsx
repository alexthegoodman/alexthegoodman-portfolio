"use client";

import { useEffect } from "react";
import styles from "../../sass/homeHero.module.scss";

export default function HomeHero() {
  useEffect(() => {
    var canvas = document.getElementById("gl-canvas") as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var gl = canvas.getContext("webgl2");
    if (!gl) {
      console.error("WebGL 2 not available");
      document.body.innerHTML =
        "This example requires WebGL 2 which is unavailable on this system.";
      return;
    }

    gl.clearColor(40 / 255, 40 / 255, 43 / 255, 1.0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    ///////////////////////////
    // SET UP PROGRAM
    ///////////////////////////

    var vsSource = (
      document.getElementById("main-vs") as HTMLScriptElement
    ).text.trim();
    var fsSource = (
      document.getElementById("main-fs") as HTMLScriptElement
    ).text.trim();

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);

    if (!vertexShader) {
      return;
    }

    gl.shaderSource(vertexShader, vsSource);
    gl.compileShader(vertexShader);

    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(vertexShader));
    }

    var fragment = gl.createShader(gl.FRAGMENT_SHADER);

    if (!fragment) {
      return;
    }

    gl.shaderSource(fragment, fsSource);
    gl.compileShader(fragment);

    if (!gl.getShaderParameter(fragment, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(fragment));
    }

    var program = gl.createProgram();

    if (!program) {
      return;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragment);
    gl.transformFeedbackVaryings(
      program,
      ["vPosition", "vVelocity"],
      gl.SEPARATE_ATTRIBS
    );
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
    }

    gl.useProgram(program);

    ///////////////////////////////////////////
    // GET UNIFORM LOCATIONS
    ///////////////////////////////////////////

    var massUniformsLocation = gl.getUniformBlockIndex(program, "Mass");
    gl.uniformBlockBinding(program, massUniformsLocation, 0);

    //////////////////////////
    // SET UP GEOMETRY
    //////////////////////////

    var NUM_PARTICLES = 200000;
    var positionData = new Float32Array(NUM_PARTICLES * 3);
    var velocityData = new Float32Array(NUM_PARTICLES * 3);
    var colorData = new Float32Array(NUM_PARTICLES * 3);

    let particleColor = [250 / 255, 175 / 255, 58 / 255];

    for (var i = 0; i < NUM_PARTICLES; ++i) {
      var vec3i = i * 3;

      positionData[vec3i] = Math.random() * 2 - 1;
      positionData[vec3i + 1] = Math.random() * 2 - 1;
      positionData[vec3i + 2] = Math.random() * 2 - 1;

      //   colorData[vec3i] = Math.random();
      //   colorData[vec3i + 1] = Math.random();
      //   colorData[vec3i + 2] = Math.random();
      colorData[vec3i] = particleColor[0];
      colorData[vec3i + 1] = particleColor[1];
      colorData[vec3i + 2] = particleColor[2];
    }

    //////////////////////////////////////
    // SET UP TRANSFORM FEEDBACK
    //////////////////////////////////////

    // Vertex array handles input
    var vertexArrayA = gl.createVertexArray();
    gl.bindVertexArray(vertexArrayA);

    var positionBufferA = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBufferA);
    gl.bufferData(gl.ARRAY_BUFFER, positionData, gl.STREAM_COPY);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    var velocityBufferA = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, velocityBufferA);
    gl.bufferData(gl.ARRAY_BUFFER, velocityData, gl.STREAM_COPY);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(1);

    var colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, colorData, gl.STATIC_DRAW);
    gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(2);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    // Transform feedback handles output
    var transformFeedbackA = gl.createTransformFeedback();
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedbackA);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, positionBufferA);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 1, velocityBufferA);

    // Vertex array handles input
    var vertexArrayB = gl.createVertexArray();
    gl.bindVertexArray(vertexArrayB);

    var positionBufferB = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBufferB);
    gl.bufferData(gl.ARRAY_BUFFER, positionData, gl.STREAM_COPY);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    var velocityBufferB = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, velocityBufferB);
    gl.bufferData(gl.ARRAY_BUFFER, velocityData, gl.STREAM_COPY);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(1);

    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(2);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    // Transform feedback handles output
    var transformFeedbackB = gl.createTransformFeedback();
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedbackB);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, positionBufferB);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 1, velocityBufferB);

    gl.bindVertexArray(null);
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);

    var currentVertexArray = vertexArrayA;
    var currentTransformFeedback = transformFeedbackB;

    ///////////////////
    // UNIFORM DATA
    ///////////////////

    // Size of the UBO in bytes is 4 * 4 + 4 * 4 * 4 = 16 + 64 = 80 bytes.
    // In floats: 4 + 4*4 = 20 floats.
    // mass1Factor (1), mass2Factor (1), mass3Factor (1), padding (1) -> Indices 0-3
    // mass1Position (4) -> Indices 4-7
    // mass2Position (4) -> Indices 8-11
    // mass3Position (4) -> Indices 12-15
    // massUniformData is 16 indices long for 16 floats (not 20, because the UBO only declares 3 floats and 3 vec4s).
    // The spec requires that std140 layout aligns vec4 to 16 bytes (4 floats).
    // mass1Factor (4 bytes) at offset 0
    // mass2Factor (4 bytes) at offset 4
    // mass3Factor (4 bytes) at offset 8
    // padding (4 bytes) at offset 12
    // mass1Position (16 bytes) at offset 16 -> Indices 4-7
    // mass2Position (16 bytes) at offset 32 -> Indices 8-11
    // mass3Position (16 bytes) at offset 48 -> Indices 12-15 (Total size: 64 bytes = 16 floats)
    // The original code was using indices 16 for mass3Position, which is incorrect for std140 layout, but it was being initialized with 3 floats instead of 4, leading to a complex issue.
    // The std140 layout rules are tricky. Let's re-verify the indices for the existing code's use of a 20-float array:
    // mass1Factor: 0
    // mass2Factor: 1
    // mass3Factor: 2
    // mass1Position: 4 (starting x)
    // mass2Position: 8 (starting x)
    // mass3Position: 12 (starting x) -- Corrected from the original code's `16` to `12` based on the std140 layout of the declared UBO structure.

    var massUniformData = new Float32Array(16); // 3 factors + 3 vec4 positions = 3 * 4 + 3 * 16 = 64 bytes, which is 16 floats.

    // Factors (Indices 0, 1, 2)
    massUniformData[0] = 0.00015; // mass1Factor (mouse-controlled) - Increased factor for stronger pull
    massUniformData[1] = Math.random() / 30000; // mass2Factor (random)
    massUniformData[2] = Math.random() / 30000; // mass3Factor (random)

    // Initial random positions for mass2 and mass3
    // mass2Position (Indices 8-11)
    massUniformData.set(
      new Float32Array([
        Math.random() * 2.0 - 1.0,
        Math.random() * 2.0 - 1.0,
        Math.random() * 2.0 - 1.0,
        1.0, // w component
      ]),
      8
    );

    // mass3Position (Indices 12-15)
    massUniformData.set(
      new Float32Array([
        Math.random() * 2.0 - 1.0,
        Math.random() * 2.0 - 1.0,
        Math.random() * 2.0 - 1.0,
        1.0, // w component
      ]),
      12
    );

    // Initialize mass1Position (Indices 4-7) at the center
    massUniformData.set(new Float32Array([0.0, 0.0, 0.0, 1.0]), 4);

    var massUniformBuffer = gl.createBuffer();
    gl.bindBufferBase(gl.UNIFORM_BUFFER, 0, massUniformBuffer);
    gl.bufferData(gl.UNIFORM_BUFFER, massUniformData, gl.DYNAMIC_DRAW); // Changed to DYNAMIC_DRAW

    ///////////////////
    // MOUSE HANDLING
    ///////////////////
    var mouseX = 0;
    var mouseY = 0;

    canvas.addEventListener("mousemove", function (event) {
      // Convert mouse coordinates to Normalized Device Coordinates (NDC)
      // NDC range is [-1, 1]
      // X: (2 * event.clientX / canvas.width) - 1
      // Y: 1 - (2 * event.clientY / canvas.height)  (Y is inverted in WebGL)
      mouseX = (event.clientX / canvas.width) * 2 - 1;
      mouseY = 1 - (event.clientY / canvas.height) * 2;
    });

    // Handle window resize to keep the canvas filling the window
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (!gl) {
        return;
      }

      gl.viewport(0, 0, canvas.width, canvas.height);
    });
    gl.viewport(0, 0, canvas.width, canvas.height);

    function draw() {
      // 1. Update the Mass Uniform Buffer with the new mouse position
      // mass1Position (x, y, z, w) starts at index 4 (vec4 aligns to 16 bytes).
      massUniformData[4] = mouseX;
      massUniformData[5] = mouseY;
      // Keep Z at 0.0 for a 2D effect, or adjust if you want depth control.
      massUniformData[6] = 0.0;
      massUniformData[7] = 1.0; // w component

      if (!gl) {
        return;
      }

      gl.bindBuffer(gl.UNIFORM_BUFFER, massUniformBuffer);
      gl.bufferSubData(
        gl.UNIFORM_BUFFER,
        4 * Float32Array.BYTES_PER_ELEMENT,
        massUniformData.subarray(4, 8)
      );
      gl.bindBuffer(gl.UNIFORM_BUFFER, null);

      // NOTE(Tarek): Putting the clear after the transform feedback
      // pass seems to cause it to be ignored on OSX 10.12/Intel Iris
      gl.clear(gl.COLOR_BUFFER_BIT);

      //////////////////////////////
      // DRAW
      //////////////////////////////

      gl.bindVertexArray(currentVertexArray);
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, currentTransformFeedback);

      // NOTE: THIS PART IS NECESSARY DUE TO A BUG IN ANGLE'S HANDLING
      // OF TRANFORM FEEDBACK OBJECTS.
      // TO BE REMOVED WHEN THAT'S FIXED.
      if (currentTransformFeedback === transformFeedbackA) {
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, positionBufferA);
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 1, velocityBufferA);
      } else {
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, positionBufferB);
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 1, velocityBufferB);
      }

      gl.beginTransformFeedback(gl.POINTS);
      gl.drawArrays(gl.POINTS, 0, NUM_PARTICLES);
      gl.endTransformFeedback();

      //////////////////
      // SWAP BUFFERS
      //////////////////

      if (currentVertexArray === vertexArrayA) {
        currentVertexArray = vertexArrayB;
        currentTransformFeedback = transformFeedbackA;
      } else {
        currentVertexArray = vertexArrayA;
        currentTransformFeedback = transformFeedbackB;
      }

      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
  }, []);

  return (
    <section className={styles.homeHero}>
      <div className={styles.heroInner}>
        <h1>
          Managing <span>Complexity</span> <br />
          from Pixel to Pixel
        </h1>
      </div>
      <canvas className={styles.heroCanvas} id="gl-canvas"></canvas>
      <script id="main-vs" type="x-shader/vs">
        {`#version 300 es

        layout(std140) uniform;

        layout(location=0) in vec3 aPosition;
        layout(location=1) in vec3 aVelocity;
        layout(location=2) in vec3 aColor;

        uniform Mass {
            float mass1Factor;
            float mass2Factor;
            float mass3Factor;
            vec4 mass1Position;
            vec4 mass2Position;
            vec4 mass3Position;
        };
    
        out vec3 vPosition;
        out vec3 vVelocity;
        out vec3 vColor;
        void main() {
            vec3 position = aPosition;
            vec3 velocity = aVelocity;

            vec3 massVec = mass1Position.xyz - position;
            float massDist2 = max(0.01, dot(massVec, massVec));
            vec3 acceleration = mass1Factor * normalize(massVec) / massDist2;

            massVec = mass2Position.xyz - position;
            massDist2 = max(0.01, dot(massVec, massVec));
            acceleration += mass2Factor * normalize(massVec) / massDist2;

            massVec = mass3Position.xyz - position;
            massDist2 = max(0.01, dot(massVec, massVec));
            acceleration += mass3Factor * normalize(massVec) / massDist2;

            velocity += acceleration;
            velocity *= 0.9999;

            vPosition = position + velocity;
            vVelocity = velocity;

            vColor = aColor;
            gl_PointSize = 2.0;
            gl_Position = vec4(position, 1.0);
        }`}
      </script>
      <script id="main-fs" type="x-fragment-shader">
        {` #version 300 es
        precision highp float;

        in vec3 vColor;

        out vec4 fragColor;
        void main() {
            float alpha = 0.15;
            fragColor = vec4(vColor, alpha);
        }`}
      </script>
    </section>
  );
}
