import { dataPost } from "./Data";

const Post = () => {
  return (
    <section className='wrapper-posts'>
      <div className='content'>
        <p>Lorem ipsum dolor</p>

        <div className="post-container">
          {dataPost.map(item => {
            return (
              <a href={'#'} key={item.id} className="post-card">
                <div className={item.category === 1 ? "post-tag color1" : "post-tag color2"} >
                  {item.tag}
                </div>
                <div className="post-title">{item.title}</div>
                <div className="post-date">{item.date}</div>
                {item.img !== null &&
                  <div className="post-image">
                    {item.img}
                  </div>
                }
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Post;