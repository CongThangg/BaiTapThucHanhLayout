import React, { Component } from 'react'
import BannerBT from './BannerBT'
import ItemBT from './ItemBT'
import Item from './ItemBT'

export default class BodyBT extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <BannerBT/>
            </div>
            <div className='col-3'>
                <ItemBT/>
            </div>
            <div className='col-3'>
                <ItemBT/>
            </div>
            <div className='col-3'>
                <ItemBT/>
            </div>
            <div className='col-3'>
                <ItemBT/>
            </div>
        </div>
        
      </div>
    )
  }
}
