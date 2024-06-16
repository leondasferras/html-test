import styles from './ColoredSection.module.css'
import img from '../../assets/images/marian-kroell-2.jpg'
import Button from '../button/Button'

const ColoredSection = () => {
  return (
    <section className={styles.coloredSection}>
    
    <div className={styles.coloredSectionTextSection}>
      <h2 className={styles.coloredSectionTitle}> Solutions for people like you</h2>
      <p className={styles.coloredSectionDescription}> How can we help your technology and services business develop a revenue engine based on Hubspot?</p>
      <div className={styles.coloredSectionButtons}>
        <Button color='lightBlue' title='Call to action'/>
        <Button color='black' title='Call to action'/>

      </div>
    </div>
    <img className={styles.coloredSectionImage} src={img} alt="image" />
    
    </section>
  )
}
export default ColoredSection