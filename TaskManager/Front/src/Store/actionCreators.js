export function taskAction(flagValue) {
    return {
        type: "taskAction",
        flagValue
    }
}

export function setTask(taskObj) {
    return {
        type: "setTask",
        taskObj
    }
}

export function taskCommentsList(commentsList) {
    return {
        type: "taskCommentsList",
        commentsList
    }
}

export function lastPageNumber(lastPageNumber) {
    return {
        type: "lastPageNumber",
        lastPageNumber
    }
}

export function taskList(taskList) {
    return {
        type: "taskList",
        taskList
    }
}

export function project(project) {
    return {
        type: "project",
        project
    }
}

export function user(user) {
    return {
        type: "user",
        user
    }
}

export function commentText(commentText) {
    return {
        type: "commentText",
        commentText
    }
}

export function projectList(projectList) {
    return {
        type: "projectList",
        projectList
    }
}

export function setIsLoadingFlag(flagValue) {
    return {
        type: "setIsLoadingFlag",
        flagValue
    }
}

export function getProjectList_ASYNC() {
    return {
        type: "getProjectList_ASYNC"
    }
}

export function ASYNC_REQUEST_FAILED(error) {
    return {
        type: "ASYNC_REQUEST_FAILED",
        error
    }
}