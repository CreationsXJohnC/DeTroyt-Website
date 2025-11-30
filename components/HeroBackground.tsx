import styles from './HeroBackground.module.css'

export default function HeroBackground({ jpeg, jpg }: { jpeg?: string; jpg?: string }) {
  const jpegSrc = jpeg || ''
  const jpgSrc = jpg || ''
  return (
    <div className={styles.heroBg} aria-hidden>
      <picture>
        {jpgSrc ? <source srcSet={jpgSrc} type="image/jpeg" /> : null}
        <img src={jpegSrc || jpgSrc} alt="" />
      </picture>
    </div>
  )
}

