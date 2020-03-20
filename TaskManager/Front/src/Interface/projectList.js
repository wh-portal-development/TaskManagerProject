import React, {Component} from "react";
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import * as actionCreators from "../Store/actionCreators.js";

class UnitSelection extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.requestProjects();
    }

    render() {
        let projects = this.props.projectList.map(
            (project) => 
            <tr>
                <td>{project.Name}</td>
                <td>{project.TLA}</td>
                <td>{project.Description}</td>
            </tr>
        );

        
        return (
            <table>
                <caption>Projects</caption>
                <tr>
                    <th>Name</th>
                    <th>TLA</th>
                    <th>Description</th>
                </tr>
                {projects}
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projectList: state.projectList,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestProjects: () => dispatch(actionCreators.getProjectList_ASYNC())
    }
}

const containerUnitSelection = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnitSelection);

export default containerUnitSelection;