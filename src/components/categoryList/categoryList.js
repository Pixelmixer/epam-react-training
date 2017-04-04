import './categoryList.scss'
import React, { PropTypes } from 'react'

class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    }
  }

  toggle() {
    const props = this.props;

    this.setState({visible: !this.state.visible});
    if (props.category.tasks && props.category.tasks.length) {
      props.onCategoryClick(props.category.tasks);
    }
  }

  render() {
    let childNodes;
    if (this.props.category.childNodes != null) {
      childNodes = this.props.category.childNodes.map((category, index) => {
        return <li key={index}><CategoryList category={category} onCategoryClick={this.props.onCategoryClick}/></li>
      });
    }

    let style = {};
    if (!this.state.visible) {
      style.display = "none";
    }

    return (
      <div className="category-list">
        {this.props.category.title && <h5 onClick={this.toggle.bind(this)}>
          {this.props.category.childNodes && (this.state.visible ? (
              <span className="glyphicon glyphicon-chevron-down"/>
            ) : (
              <span className="glyphicon glyphicon-chevron-right"/>
          ))}
          {this.props.category.title}
        </h5>}
        <ul style={style}>
          {childNodes}
        </ul>
      </div>
    );
  }
}

CategoryList.propTypes = {
  category: PropTypes.object.isRequired,
  onCategoryClick: PropTypes.func.isRequired
};

export default CategoryList;

