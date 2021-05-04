import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from "../components/mainpages/utils/Loading/Loading"
import Footer from '../components/pageComponents/Footer'
import axios from 'axios'
import moment from 'moment'


function BlogDetailScreen() {
  const params = useParams()
  const [blogDetail, setBlogDetail] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const getBlogDetail = async() => {
      try {
        setLoading(true)
        const res = await axios.get(`/api/blogs/${params.id}`)
        setBlogDetail(res.data)
        setLoading(false)
      } catch (err) {
        console.error(err.response.data.msg)
      }
    }
    getBlogDetail()
  }, [params.id])



  if(loading) return <div><Loading /></div>

  return (
    <>
      <div id="custom-detail-page-global-top-image-container">
        <section className="custom-detail-page-global-top-section">
          <div className="container custom-detail-page-global-text-container text-white">
              <h1 className="custom-detail-page-global-h1-text">Blog DetailS</h1>
              <div className="custom-detail-page-global-header-title-container">
                <Link to="/">
                  <i className="fa fa-home"></i>
                  Home
                </Link>
                <Link to="/blogs">
                  <i className="fa fa-angle-right"></i>
                  Blogs
                </Link>
                <span>
                  <i className="fa fa-angle-right"></i>
                  Blog Details
                </span>
              </div>

              <div className="custom-detail-page-global-img-bg-container custom-blog-detail-page-style">
                <div className="custom-detail-page-global-text-box blog-page-detail-text-box">
                  <h3>
                    {blogDetail.title}
                  </h3>
                </div>
                <div className="custom-detail-page-global-avatar-img-box">
                  <img src={blogDetail.avatar} alt="avatarImg" />
                  <span>{blogDetail.name}</span>
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <span>
                    {moment(blogDetail.createdAt).fromNow()}
                  </span>
                </div>
              </div>

          </div>
        </section>
      </div>

      <section id="blog-detail-page-container">
        <div className="container">
          <img src={blogDetail.image} alt="blogImg" id="main-img-custom-class" />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-2 col-xxl-2 blog-detail-page-social-icons-box" id="custom-blog-details">
              <a href="####">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="####">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="####">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="####">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <div className="col-lg-10 col-xxl-10 blog-detail-page-text-container">
              <div className="blog-detail-page-text-item-box">
                <h5>Step 1 - Butt Reduction</h5>
                <p>
                  {blogDetail.description}
                </p>
              </div>
              <div className="blog-detail-page-text-item-box">
                <h5>Step 2 - Facial Beautification</h5>
                <p>
                 {blogDetail.description}
                </p>
              </div>
              <div className="blog-detail-page-text-item-box">
                <h5>Step 3 - Facial Beautification</h5>
                <p>
                  {blogDetail.description}
                </p>
                <p>
                 {blogDetail.description}
                </p>
              </div>
            </div>


            <div className="col-lg-12 col-xxl-12">
              <div className="blog-detail-page-images-container">
                <div className="row">
                  <div className="col-sm-4">
                    <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618598114/healthCare/gallery-10_bnfutv.jpg"  alt="" />
                  </div>
                  <div className="col-sm-4">
                    <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618598113/healthCare/gallery-5_axpflc.jpg"  alt="" />
                  </div>
                  <div className="col-sm-4">
                    <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618598113/healthCare/gallery-6_z9pzre.jpg"  alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}


export default BlogDetailScreen

