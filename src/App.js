
 import './App.css';
 import image from './imgsrc.jpg'
 function App() {

return (
  <div style = {{border:"1px solid black",maxWidth:"100vw"}}>
  <h1 classeName ="title red">Marwa Ben Khalifa</h1>


<br/>
<img src="/image.pubic.jpg" alt="..." />

<br/>

<img src={image} alt="..."/>


<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
</div>
)
  }

  export default App;