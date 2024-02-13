import backgroundVideo from "./videos/beach_waves.mp4";

export default function Video() {
  return (
    <>
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo}></source>
      </video>
      B-Roll provided by <a href="http://www.videezy.com">Videezy!</a>
    </>
  );
}
