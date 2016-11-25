import React, { PropTypes, Component } from 'react';

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.setYear(+e.target.innerText);  //try to use textContent
    this.props.getPhotos(+e.target.innerText);
  }
  render() {
    const { year, photos, fetching, error } = this.props;
    const years = [2016, 2015, 2014, 2013, 2012, 2011, 2010];
    return <div className='ib page'>
        <p>
          { years.map( (item,index) => <button className='btn' key={index} onClick={::this.onYearBtnClick}>{item}</button>)}
        </p>
      <h3>{ year } year you have [{photos.length}] photos</h3>
      { error ? <p className='error'> Error ocured during loading photos</p> : '' }
      {
        fetching
        ?
          <p>Loading...</p>
        :
          photos.map( (entry,index) =>
            <div key={index} className='photo'>
              <p><img src={entry.src} /></p>
              <p>{entry.likes.count} ❤</p>
            </div>
          )
      }
      </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

/*::this.onYearBtnClick === this.onYearBtnClick.bind(this)*/