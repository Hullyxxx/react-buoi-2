import React, { Component } from 'react'
import BodyGlassChange from '../BodyGlassChange/BodyGlassChange'
import HeaderGlassChange from '../HeaderGlassChange/HeaderGlassChange'
import './GlassChange.css'

export default class GlassChange extends Component {
    state = {
        listGlass: [
            {
                "id": 1,
                "price": 30,
                "name": "GUCCI G8850U",
                "url": "./glassesImage/v1.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 2,
                "price": 50,
                "name": "GUCCI G8759H",
                "url": "./glassesImage/v2.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 3,
                "price": 30,
                "name": "DIOR D6700HQ",
                "url": "./glassesImage/v3.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 4,
                "price": 70,
                "name": "DIOR D6005U",
                "url": "./glassesImage/v4.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 5,
                "price": 40,
                "name": "PRADA P8750",
                "url": "./glassesImage/v5.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 6,
                "price": 60,
                "name": "PRADA P9700",
                "url": "./glassesImage/v6.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 7,
                "price": 80,
                "name": "FENDI F8750",
                "url": "./glassesImage/v7.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 8,
                "price": 100,
                "name": "FENDI F8500",
                "url": "./glassesImage/v8.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 9,
                "price": 60,
                "name": "FENDI F4300",
                "url": "./glassesImage/v9.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            }
        ],
        glassChange: './glassesImage/v1.png'
    }
    HandleChangeImg = (url) => {
        console.log('yes')
        this.setState({
            glassChange: url
        })
    }
    HandleRenderItemGlass = () => {
        return this.state.listGlass.map(itemGlass => {
            return <div className='column '>
                <img 
                src={itemGlass.url} 
                alt={itemGlass.name} 
                style={{ width: '10rem', marginRight: '20px', marginBottom: '10px' }} 
                onClick= {() => {
                    this.HandleChangeImg(itemGlass.url)
                }} 
                />
            </div>
        })
    }
    render() {
        return (
            <div className='background'>
                <HeaderGlassChange />
                <BodyGlassChange glassChange={this.state.glassChange} HandleRenderItemGlass={this.HandleRenderItemGlass} />
            </div>
        )
    }
}
