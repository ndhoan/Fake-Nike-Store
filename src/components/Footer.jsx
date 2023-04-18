function Footer() {
  const githubLink = 'https://github.com/ndhoan'
  return (
    <>
      <footer>
        <p>
          Copyright © 2023 Hoan Nguyen
          <a aria-label='github' target='_blank' href={githubLink}>
            <i class='fa-brands fa-github'></i>
          </a>
        </p>
      </footer>
    </>
  )
}

export default Footer
