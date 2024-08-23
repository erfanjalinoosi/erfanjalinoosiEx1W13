import { useState } from "react"
import Contents from "./Contents";
import styles from "./Header.module.css"

function Header() {
    const [Content, setContent] = useState(localStorage.getItem("cont"));
    const [Selected, setSelected] = useState(localStorage.getItem("cont"))

    function setter(id) {
        setContent(id);
        setSelected(id);
        localStorage.setItem("cont", id);
    }
    const contents = [
        {id: 1, name: "TAB 1"},
        {id: 2, name: "TAB 2"},
        {id: 3, name: "TAB 3"},
        {id: 4, name: "TAB 4"}
    ]
    if(localStorage.getItem("cont")){
        return (
            <>
          <div className={styles.container}>
              <h1 className={styles.title}>Tabs components with React</h1>
              <ul className={styles.list}>
                  {contents.map((content) => (
                      <li key={content.id} onClick={() => setter(content.id)} className={Selected==content.id && styles.selected}>{content.name}</li>
                  ))}
              </ul>
            </div>
            <Contents share = {Content} />
          </>
        )
    }
    else{
        return (
            <div className={styles.container2}>
                <h1 className={styles.title}>Tabs components with React</h1>
                <ul className={styles.list}>
                    {contents.map((content) => (
                        <li key={content.id} onClick={() => setter(content.id)}>{content.name}</li>
                    ))}
                </ul>
                {/* <Contents share = {Content} /> */}
            </div>
          )
    }
}

export default Header