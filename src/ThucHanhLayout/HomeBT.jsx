import React, { Component } from 'react'
import BodyBT from './BodyBT'
import FooterBT from './FooterBT'
import HeaderBT from './HeaderBT'

export default class HomeBT extends Component {
  render() {
    return (
      <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                  <HeaderBT/>
                 </div>
                <div className='col-12'>
                    <BodyBT/>
                </div>
                <div className='col-12'>
                  <FooterBT/>
                </div>

            </div>
      </div>
    )
  }
}
