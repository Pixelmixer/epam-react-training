import React, { PropTypes } from 'react'
import { setActiveTasks } from '../actions/index'
import CategoryList from '../components/categoryList/categoryList'
import { connect } from 'react-redux'

let CategoryListContainer = ({ categories, onCategoryClick }) => {
  return (
    <div className="col-xs-6">
      <CategoryList category={categories} onCategoryClick={onCategoryClick}/>
    </div>
  )
};

CategoryListContainer.propTypes = {
  categories: PropTypes.object.isRequired,
  onCategoryClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCategoryClick: (tasks) => {
      dispatch(setActiveTasks(tasks))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListContainer)
