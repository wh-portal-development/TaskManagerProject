import { combineReducers } from 'redux';

const _ = require('lodash');

const Reducers = combineReducers(
    {
        taskCreation,
        task,
        taskComments,
        taskList,
        lastPageNumber,
        projectList,
        project,
        user,
        commentText,
        isLoading,
        error
    }
);

export default Reducers;

function taskCreation(state = false, action) {
    switch(action.type) {
        case "taskAction":
            return action.flagValue;
        default:
            return state;
    }
}

function task(state = {}, action) {
    switch(action.type) {
        case "setTask":
            return action.taskObj;
        default:
            return state;
    }
}

function taskComments(state = [], action) {
    switch(action.type) {
        case "taskCommentsList":
            return action.commentsList;
        default:
            return state;
    }
}

function lastPageNumber(state = 1, action) {
    switch(action.type) {
        case "lastPageNumber":
            return action.lastPageNumber
        default:
            return state;
    }
}

function taskList(state = [], action) {
    switch(action.type) {
        case "taskList":
            return action.taskList
        default:
            return state;
    }
}

function project(state = {}, action) {
    switch(action.type) {
        case "project":
            return action.project
        default:
            return state;
    }
}

function user(state = {}, action) {
    switch(action.type) {
        case "user":
            return action.user
        default:
            return state;
    }
}

function commentText(state = "", action) {
    switch(action.type) {
        case "commentText":
            return action.commentText
        default:
            return state;
    }
}

function projectList(state = [], action) {
    switch(action.type) {
        case "projectList":
            return action.projectList
        default:
            return state;
    }
}

function isLoading(state = true, action) {
    switch(action.type) {
        case "setIsLoadingFlag":
            return action.flagValue
        default:
            return state;
    }
}

function error(state = false, action) {
    switch(action.type) {
        case "ASYNC_REQUEST_FAILED":
            return action.error
        default:
            return state;
    }
}