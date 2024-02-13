import backgroundVideo from "./videos/beach_waves.mp4";
import "./video.css";
export default function Video() {
  return (
    <>
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo}></source>
      </video>
    </>
  );
}
