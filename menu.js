document.body.insertAdjacentHTML('afterbegin', `
    <input type="checkbox" id="menu-check" style="display:none;">
    <label for="menu-check" style="position:fixed; top:15px; left:15px; z-index:10000; background:var(--royal-blue); color:var(--gold); padding:10px 15px; border-radius:5px; cursor:pointer; border:1px solid var(--gold);">
        <i class="fas fa-bars"></i> MENU
    </label>
    <div class="sidebar">
        <div style="padding:40px 20px; text-align:center; border-bottom:1px solid rgba(212,175,55,0.3);">
            <img src="logo.png" width="80" style="border-radius:50%; background:white; padding:5px; border:2px solid var(--gold);">
            <h4 style="color:var(--gold); font-family:'Cinzel'; margin-top:15px;">THE LALIT</h4>
        </div>
        <div class="nav-links" style="padding:20px;">
            <a href="index.html" style="color:white; display:block; padding:12px; text-decoration:none;"><i class="fas fa-home me-2"></i> Dashboard</a>
            <a href="view-students.html" style="color:white; display:block; padding:12px; text-decoration:none;"><i class="fas fa-users me-2"></i> Student List</a>
            <a href="add-student.html" style="color:white; display:block; padding:12px; text-decoration:none;"><i class="fas fa-user-plus me-2"></i> New Admission</a>
            <a href="fee-master.html" style="color:white; display:block; padding:12px; text-decoration:none;"><i class="fas fa-coins me-2"></i> Fee Master</a>
            <a href="collect-fees.html" style="color:white; display:block; padding:12px; text-decoration:none;"><i class="fas fa-wallet me-2"></i> Collect Fees</a>
        </div>
    </div>
`);

