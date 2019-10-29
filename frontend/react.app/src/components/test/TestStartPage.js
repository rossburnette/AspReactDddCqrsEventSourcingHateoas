import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as testActions from "../../redux/actions/testActions";
import PropTypes from "prop-types";
import QuestionsList from "./QuestionsList";

const TestStartPage = ({ loadTestQuestions, testQuestions }) =>{
  useEffect(() =>{
      loadTestQuestions();
  }, []);

  return(
      <div>
          <p>Questions</p>
          <QuestionsList testQuestions={testQuestions}/>
      </div>
  )
};

TestStartPage.propTypes = {
    testQuestions: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        testQuestions: state.testQuestions
    };
}

const mapDispatchToProps = {
    testQuestions: testActions.loadTestQuestions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestStartPage);