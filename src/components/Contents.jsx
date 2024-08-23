import Content from "./shared/Content"
import styles from "./Contents.module.css"

function Contents(props) {
    const share = props
    // console.log(props);
  return (
    <div className={styles.container}>
        <Content share = {share}/>
    </div>
  )
}

export default Contents