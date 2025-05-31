const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let drawing = false;
let brushColor = "#4b8b3b"; // Default color is green

// Set canvas background to white
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Start drawing
canvas.addEventListener("mousedown", (event) => {
    drawing = true;
    draw(event);
});
canvas.addEventListener("mouseup", () => {
    drawing = false;
    ctx.beginPath();
});
canvas.addEventListener("mousemove", draw);

function draw(event) {
    if (!drawing) return;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = brushColor; // Dynamic brush color
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

// Change brush color when selecting from dropdown
function changeColor() {
    brushColor = document.getElementById("color").value;
}

// Clear the canvas
function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
}

document.addEventListener("mousemove", (event) => {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = `${event.clientX}px`;
    sparkle.style.top = `${event.clientY}px`;

    document.getElementById("sparkles-container").appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000); // Removes sparkle after fading out
});