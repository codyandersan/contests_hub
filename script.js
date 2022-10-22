const get_contests = async ()=>{
    let resp = await fetch("https://kontests.net/api/v1/all")   
    let response = await resp.json()
    return response
}

const run = async ()=> {
    contests = await get_contests()
    console.log(contests)
    let images = [
        "https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id1224500457?k=20&m=1224500457&s=612x612&w=0&h=LpjdY6okVWiKh8LT_LqcXz53kWaXVf47ThXKwMcCoHI=",
        "https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500?k=20&m=537331500&s=612x612&w=0&h=vnE5e_eExMtetDyYBTBoORFkxiK02o9H6KfgFwvKt4c=",
        "https://media.istockphoto.com/photos/computer-programmer-working-on-new-software-program-picture-id1212006391?k=20&m=1212006391&s=612x612&w=0&h=5UBaO9Ov9tF3Yxe6fRjlsVMbosYe1pb0dOPSgbvvgSw=",
        "https://media.istockphoto.com/photos/young-caucasian-female-programmer-in-glasses-writes-program-code-on-a-picture-id1255928059?k=20&m=1255928059&s=612x612&w=0&h=nR2lBkjpHXH01KfqIM-tsWTHO4N4kd6uLH0HmHjUAlU=",
        "https://media.istockphoto.com/photos/developing-programmer-team-development-website-design-and-coding-in-picture-id1169929038?k=20&m=1169929038&s=612x612&w=0&h=bvhMkXXR25LX5EJPbIXP151B3igMMR8_D_oWEUTI2tk=",
        "https://media.istockphoto.com/photos/closeup-focus-on-persons-hands-typing-on-the-desktop-computer-show-picture-id1356364268?k=20&m=1356364268&s=612x612&w=0&h=id2OGxvQZMua2DWO2wes0iowb2U2QAyWY7iPNM3UYYg=",
        "https://media.istockphoto.com/photos/smart-female-it-programer-working-on-desktop-computer-in-data-center-picture-id1194430863?k=20&m=1194430863&s=612x612&w=0&h=jXs5pGuhn-Fy463zdQa0Ap6YRtJTr3-Yki_bMEs9pfs=",
        "https://media.istockphoto.com/photos/cyber-security-web-development-and-work-in-it-concept-picture-id1289411982?k=20&m=1289411982&s=612x612&w=0&h=56mABeylpLBbq8Ln1OWtzbinqpJBW4s-E_-3_ulI0Rg=",
        "https://media.istockphoto.com/photos/developing-programmer-team-development-website-design-and-coding-in-picture-id1169929038?k=20&m=1169929038&s=612x612&w=0&h=bvhMkXXR25LX5EJPbIXP151B3igMMR8_D_oWEUTI2tk="
    ]
  
    for (contest in contests) {
        let contest_data = contests[contest]
        let contest_name = contest_data["name"]
        let contest_url = contest_data["url"]
        let contest_image = images[Number.parseInt(Math.random()*images.length)]
        let contest_site = contest_data["site"]
        let contest_in_24_h = contest_data["in_24_hours"]
        let time = new Date(contest_data["start_time"])
        let contest_start_time = time.toLocaleString('en-US', {
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })

        holder.innerHTML += `
        <div class="card mx-3 my-3" style="width: 30%;">
        <img src="${contest_image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">${contest_name}</h5>
            <p class="card-text mx-0 text-center"><b>Site</b>: ${contest_site} <br><b> Starts at:</b> ${contest_start_time} <br><b> In 24 hours:</b> ${contest_in_24_h} </p>
            <center><a href="${contest_url}" class="btn btn-primary">Open Contest</a> </center>
        </div>
        </div>
        `
    }
}

run()
