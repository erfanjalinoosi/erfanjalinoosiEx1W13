import styles from "./Content.module.css"

function Content(props) {
    const {share} = props.share;
    // console.log(share);
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>content {share}</h2>        
        <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis doloremque voluptatem, nostrum aut totam facere sapiente saepe quidem a sunt exercitationem aperiam recusandae nihil vero tenetur, excepturi nemo? Suscipit, omnis.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis doloremque voluptatem, nostrum aut totam facere sapiente saepe quidem a sunt exercitationem aperiam recusandae nihil vero tenetur, excepturi nemo? Suscipit, omnis.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis doloremque voluptatem, nostrum aut totam facere sapiente saepe quidem a sunt exercitationem aperiam recusandae nihil vero tenetur, excepturi nemo? Suscipit, omnis.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis doloremque voluptatem, nostrum aut totam facere sapiente saepe quidem a sunt exercitationem aperiam recusandae nihil vero tenetur, excepturi nemo? Suscipit, omnis.
        </div>
    </div>
  )
}

export default Content