import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as testActions from "../../redux/actions/testActions";
import PropTypes from "prop-types";
import QuestionsList from "./QuestionsList";

const TestStartPage = ({ loadTestQuestions, testQuestions }) => {
    useEffect(() =>{ loadTestQuestions(); }, []);
    
    return(
        <>
            <p>Questions</p>
            <QuestionsList testQuestions={testQuestions}/>
        </>
    );
};

TestStartPage.propTypes = {
    loadTestQuestions: PropTypes.func.isRequired,
    testQuestions: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        testQuestions: state.testQuestions
    };
}

const mapDispatchToProps = {
    loadTestQuestions: testActions.loadTestQuestions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestStartPage);