import React, {Component} from "react";
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table';

import * as actionCreators from "../Store/actionCreators.js";

class projectList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.requestProjects();
    }

    render() {
        let projects = this.props.projectList.map(
            (project) => 
            <tr key = {project.id}>
                <td>{project.name}</td>
                <td>{project.tla}</td>
                <td>{project.description}</td>
            </tr>
        );
        projects = <tbody>{projects}</tbody>
        
        return (
            <Table striped bordered hover>
                <caption>Projects</caption>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>TLA</th>
                    <th>Description</th>
                </tr>
                </thead>
                {projects}
            </Table>
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

const containerProjectList = connect(
    mapStateToProps,
    mapDispatchToProps
)(projectList);

export default containerProjectList;