export const goToLogin = (history) => {
    history.push("/");
};

export const goToSignUp = (history) => {
    history.push("/signup");
};

export const goToFeed = (history) => {
    history.push("/feed");
};

export const goToPost = (history, id) => {
    history.push(`/feed/${id}`);
};