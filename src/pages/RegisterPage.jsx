export const RegisterPage = () => {
    return (
        <section className="regsiter-page">
            <h2>Isi form untuk mendaftar akun.</h2>
            <div className="input-register">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value="" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value="" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value="" />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" value="" />
                <button type="button">Register</button>
            </div>
            <p>
                Sudah punya akun? <a href="/">Login di sini</a>
            </p>
        </section>
    );
};
