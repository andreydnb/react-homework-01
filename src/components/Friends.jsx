export const Friend = ({
    friend: {name, isOnline, avatar}
}) => {
    return (
    <div class="friendslist">
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
    </div>
    );
};
