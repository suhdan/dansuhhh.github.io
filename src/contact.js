import { h } from 'preact'
import SVG from './assets/svg'

const Contact = () => {
  return(
    <section class="contact-info">
      <div class="back">
        <div>
          <div id="back-grid-item-1"></div>
          <div id="back-grid-item-2"></div>
        </div>
        <div>
          <div id="back-grid-item-3"></div>
          <div id="back-grid-item-4"></div>
        </div>
      </div>
      <h3>Contact</h3>
        <div class="contact-point">
          <SVG.PHONE/>
          <span>516 660 1770</span>
        </div>
        <div class="contact-point">
          <SVG.EMAIL/>
          <span>dansuh3593@gmail.com</span>
        </div>
        <div class="contact-point">
          <SVG.ADDRESS/>
          <span>brooklyn, ny</span>
        </div>
    </section>
  )
}

module.exports = Contact