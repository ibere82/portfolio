import Menu from '../Menu';
import css from './footer.module.css';

export default function Footer() {
  return (
    <div className={css.container}>
      <div >
        <p>&copy; 2021  <a target='_blank' rel="noreferrer"  title="Iberê' s linkedin page" href='https://www.linkedin.com/in/iber%C3%AA-abondanza-kuhlmann-0691b32a/'>Iberê Abondanza Kuhlmann</a></p>
      </div>
      <Menu />
    </div >
  )
}
