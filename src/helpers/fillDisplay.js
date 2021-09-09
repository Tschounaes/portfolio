const fillDisplay = (displayFormat, videoAspect) => {
    const screenAspect = displayFormat.width / displayFormat.height;
    if (screenAspect > videoAspect) {  
        return { width: displayFormat.width, height: displayFormat.width / videoAspect }
    } else {
        return { width: displayFormat.height * videoAspect, height: displayFormat.height }
    }
}

export default fillDisplay;