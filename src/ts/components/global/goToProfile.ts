function goToProfilePage(id: number) {
    window.localStorage.setItem('userProfileId', `${id}`);
    window.location.href = 'profile.html';
}

export default goToProfilePage;