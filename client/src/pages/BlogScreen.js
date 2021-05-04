import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from "moment"
import Loading from '../components/mainpages/utils/Loading/Loading'
import Footer from '../components/pageComponents/Footer'


function BlogScreen() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    getAllBlogs()
  }, [])

  const getAllBlogs = async() => {
    try {
      setLoading(true)
      const res = await axios.get("api/blogs")
      setBlogs(res.data)
      setLoading(false)
    } catch (err) {
      console.error(err.response.data.msg)
    }
  }

  if(loading) return <div><Loading /></div>

  return (
    <>
    <div>
      <div id="global-top-image-container">
        <section className="global-top-section-container">
          <div className="container global-top-text-container text-white">
            <h1 className="global-h1-text">Blogs</h1>
              <div className="global-header-title-container">
                <Link to="/">
                  <i className="fa fa-home"></i>
                  Home
                </Link>
                <span>
                  <i className="fa fa-angle-right"></i>
                  Blogs
                </span>
              </div>
          </div>
        </section>
      </div>


      <section id="blog-page-container">
        <div className="container">
          <div className="row">
            {
              blogs.map(blog => (

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4" key={blog._id}>
                <div className="blog-page-contents-container">
                  <div className="blog-page-img-container">
                    <img src={blog.image} alt="blogImg" />
                  </div>
                  <div className="blog-page-text-container blog-page-container-1">
                    <h5>
                      <Link to={`blogs/${blog._id}`}>
                        {blog.title}
                      </Link>
                    </h5>
                  </div>
                  <div className="blog-page-container-2">
                    <img src={blog.avatar} alt="avatarImg" />
                    <span>{blog.name}</span>
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span>
                      {moment(blog.createdAt).fromNow()}
                    </span>
                  </div>
                </div>
              </div>

              ))
            }

          </div>
        </div>
      </section>
    </div>

    <Footer />

    </>
  )
}


export default BlogScreen

