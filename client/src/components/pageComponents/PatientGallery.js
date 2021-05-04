import React, { Component } from 'react'
import ImgUrlData from '../../ImgUrlData'


// Component for gallery image
class PatientGalleryImage extends Component {
  render() {
   return(
    <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
   )
  }
}


// Component for gallery modal
class PatientGalleryModal extends React.Component {
  render() {
   if (this.props.isopen === false) {
    return null;
   }

   return(
    <div isopen={this.props.isopen} className='modal-overlay' onClick={this.props.onClick} name={this.props.name}>
     <div className='modal-body'>
      <a className='modal-close' href='####' onClick={this.props.onClick}><span className='fa fa-times'></span></a>
      <img src={this.props.src} alt="" />
     </div>
    </div>
   )
  }
}


// Parent Image Gallery Component
class PatientGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
     showModal: false,
     url: ''
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  render() {
    return(
      <div className="patient-image-gallery-box">
        <h2 className="gallery-text">Our Works</h2>
        <div id="main-patient-gallery-container">
          <div refs='gallery-container' className='container-fluid gallery-container'>
            <div className='row'>
              {
              ImgUrlData.map((url, index) => {
                return <div key={index.toString()} className='col-sm-6 col-md-3 col-xl-2'>
                  <div key={index.toString()} className='gallery-card'>
                    <PatientGalleryImage className='gallery-thumbnail' key={index.toString()} src={url} alt={'Image number ' + (index + 1)} />

                    <span className='card-icon-open fa fa-expand' value={url} onClick={(e) => this.openModal(url, e)}></span>
                  </div>
                </div>
              })
              }
            </div>

            <PatientGalleryModal isopen={this.state.showModal} onClick={this.closeModal} src={this.state.url} />
          </div>
        </div>
      </div>
    )
   }

   // Function for opening modal dialog
   openModal(url, e) {
    this.setState({
     showModal: true,
     url: url
    })
   };

   // Function for closing modal dialog
   closeModal() {
    this.setState({
      showModal: false,
      url: ''
    })
  }
}


export default PatientGallery
