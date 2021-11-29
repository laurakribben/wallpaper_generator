import SimplexNoise from 'simplex-noise'


const generate = document.getElementById("btn")
generate.addEventListener("click", () => {
        console.log("Generate wallpaper")
            //generateRainbow()
        generateCurve()
            //window.requestAnimationFrame(generateWallpaper)
    })
    //let download = document.createElement("button");
    //download.innerHTML = "Download";
    //document.getElementById("buttons").appendChild(download)

const canvas = document.getElementById('wallpaper');
const ctx = canvas.getContext('2d')

const simplex = new SimplexNoise()

var wallpaper = {
    stepWidth: 0.1,
    frequency: .005
}

function generateRainbow(time) {
    //window.requestAnimationFrame(generateWallpaper)
    const r = Math.random()
    for (var y = 0; y < canvas.height; y += wallpaper.stepWidth) {
        for (var x = 0; x < canvas.width; x += wallpaper.stepWidth) {
            var n = simplex.noise3D(x * wallpaper.frequency, y * wallpaper.frequency, time * 0.004) //*r
                //var n = simplex.noise2D(x * wallpaper.frequency, y * wallpaper.frequency) //*r
            n = n * .5 + .5
                //console.log("n", n)
            ctx.fillStyle = `hsl(${360*n},100%,50%)`
            ctx.fillRect(x, y, wallpaper.stepWidth, wallpaper.stepWidth)
        }
    }

}

function generateCurve(time) {

    var noise = canvas.width
    ctx.beginPath()
    var n = simplex.noise2D(0 * wallpaper.frequency, 0)
    n = n * .5 + .5
    ctx.moveTo(1, n * canvas.height)



    for (var x = 1; x <= canvas.width; x += wallpaper.stepWidth) {
        var n = simplex.noise2D(x * wallpaper.frequency, 0)
        n = n * .5 + .5
        ctx.lineTo(x, n * canvas.height)
    }

    ctx.lineWidth = "1";
    ctx.strokeStyle = "rgba(255,0,255,)"
    ctx.stroke()

}

function renderWallpaper() {

}

function downloadWallpaper() {

}

generateCurve()