const socialMediaLinks = {
  github: 'https://github.com/KievAndres',
  facebook: 'https://www.facebook.com/profile.php?id=100090037513292',
  twitter: 'https://twitter.com/KievAndresMRV',
  linkedin: 'https://www.linkedin.com/in/kievandres/',
  instagram: 'https://www.instagram.com/kievandres/'
}
const socialMediaButtons = document.getElementsByClassName('social-media-button');
Array.from(socialMediaButtons).forEach(button => {
  button.addEventListener('click', (event) => {
    const link = socialMediaLinks[event.currentTarget.id];
    window.open(link, '_blank')
  })
})