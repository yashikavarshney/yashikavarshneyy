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
        <template data-film-scene><MyWorld /></template>
        <template data-film-scene><DesignProcess /></template>
        <template data-film-scene><EMTDesk /></template>
        <template data-film-scene><QMS /></template>
        <template data-film-scene><Analytics /></template>
        <template data-film-scene><MoreWork /></template>
        <template data-film-scene><Playground /></template>
        <template data-film-scene><AIExploration /></template>
        <template data-film-scene><SocialPresence /></template>
        <template data-film-scene><Travel /></template>
        <template data-film-scene><Studio /></template>
        <template data-film-scene><About /></template>
        <template data-film-scene><Connect /></template>
        <FilmOverlays />
      </div>
      <FilmControls />
    </div>
  );
}
