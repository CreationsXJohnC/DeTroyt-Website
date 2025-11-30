import styles from './SocialBar.module.css'

export default function SocialBar() {
  return (
    <div className={styles.wrap}>
      <a href="https://www.instagram.com/officialdetroyt/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <img className={`${styles.icon} ${styles.ig}`} src="/assets/social/instagram.png" alt="Instagram" />
      </a>
      <a href="https://soundcloud.com/officialdetroyt" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud">
        <img className={`${styles.icon} ${styles.sc}`} src="/assets/social/soundcloud.png" alt="SoundCloud" />
      </a>
      <a href="https://open.spotify.com/artist/1xwTjVGhlYbZsZJXID16G1" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
        <img className={`${styles.icon} ${styles.sp}`} src="/assets/social/spotify.png" alt="Spotify" />
      </a>
      <a href="https://music.apple.com/us/artist/dj-detroyt/1192972214" target="_blank" rel="noopener noreferrer" aria-label="Apple Music">
        <img className={`${styles.icon} ${styles.am}`} src="/assets/social/applemusic.png" alt="Apple Music" />
      </a>
    </div>
  )
}
