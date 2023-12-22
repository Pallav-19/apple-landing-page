import "./App.css"
import bgvid from "./assets/videos/bgvid.mp4"
import ButtonContainer from "./components/ButtonContainer";
import CustomButton from "./components/CustomButton";
import GridItem from "./components/GridItem";
import imgapple from "./assets/images/imgapple.jpg"
function App() {
  return (
    <div
      className="container"
    >
      <div
        className="video-box"
      >
        <video autoPlay muted loop id="myVideo" src={bgvid} />
        <div
          className="vid-text-container"
        >
          <div
            className="vid-text"
          >
            <p className="watch">
              Watch
            </p>
            <p>
              Series 9
            </p>
            <p
              style={{
                marginTop: '1rem'
              }}
            >
              Double tap. A new way to use Apple watch.
            </p>
            <p>
              <ButtonContainer>
                <CustomButton text={'Learn more'} />
                <CustomButton text={'Buy'} />

              </ButtonContainer>
            </p>

          </div>
        </div>
      </div>
      <div
        className="grid-container"
      >
        <GridItem imgSrc={imgapple} heading={'Wonder Awaits.'} description={'Give the gifts they have been looking forward to all year.'} />
        <GridItem imgSrc={imgapple} heading={'Wonder Awaits.'} description={'Give the gifts they have been looking forward to all year.'} />
      </div>
    </div>
  );
}

export default App;
