import Opening from "./scenes/Opening";
import MyWorld from "./scenes/MyWorld";
import DesignProcess from "./scenes/DesignProcess";
import EMTDesk from "./scenes/EMTDesk";
import QMS from "./scenes/QMS";
import Analytics from "./scenes/Analytics";
import MoreWork from "./scenes/MoreWork";
import Playground from "./scenes/Playground";
import AIExploration from "./scenes/AIExploration";
import SocialPresence from "./scenes/SocialPresence";
import Travel from "./scenes/Travel";
import Studio from "./scenes/Studio";
import About from "./scenes/About";
import Connect from "./scenes/Connect";
import FilmOverlays from "./FilmOverlays";
import FilmControls from "./FilmControls";

export default function PortfolioFilm() {
  return (
    <div
      className="mv"
      id="mv"
      role="region"
      tabIndex={0}
      aria-label="Yashika Varshney — an animated portfolio film. Click or tap the film to play or pause. Use the player controls, scroll, or the arrow keys to move through it."
    >
      <div className="stage" id="stage">
        <Opening />
        <MyWorld />
        <DesignProcess />
        <EMTDesk />
        <QMS />
        <Analytics />
        <MoreWork />
        <Playground />
        <AIExploration />
        <SocialPresence />
        <Travel />
        <Studio />
        <About />
        <Connect />
        <FilmOverlays />
      </div>
      <FilmControls />
    </div>
  );
}
