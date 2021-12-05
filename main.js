image1=""
status=""
song=""
objects=[]
function preload() {
song=loadSound("transiberian_orchestra.mp3")
}
function setup() {
    canvas= createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
video.hide()
}
function draw() {
    image(video,0,0,300,300)
    if (status!="") {
        objectdetector.detect(video,gotresult)
        r=random(255)
        g=random(255)
        b=random(255)
        for(i=0;i<objects.length;i++)
        {
            document.getElementById("h3").innerHTML="status:object detected"
            document.getElementById("objects").innerHTML="number of objects detected are "+objects.length
            fill(r,g,b)
            pr=floor(objects[i].confidence*100)
            text(objects[i].label+" "+pr+"%",objects[i].x+20,objects[i].y+20)
            noFill()
            stroke(r,g,b)
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
            if (objects[i].label=person) {
                document.getElementById("h3").innerHTML="status:baby detected"
                song.stop()
            }
            else(objects[i].label=result.length)
            document.getElementById("h3").innerHTML="status:baby not detected"
            song.play()
        }
        if (objects[i].label<0) {
            document.getElementById("h3").innerHTML="status:baby not detected"
            song.play()
        }
    }
}
function modelloaded() {
    console.log("modelloaded")  
    status=true
  }
  function gotresult(error,result) {
      if (error) {
          console.log("error")
      }
      else{
          console.log(result)
          objects=result

      }

  }
