export const Statistics = ({
    data: {label, percentage}
}) => {
    return (
    <div class="friendslist">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
    </div>
    );
};
