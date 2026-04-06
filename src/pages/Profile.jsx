import React from 'react'
import "./Profile.css"
import SiteLayout from '../components/SiteLayout'
function Profile() {
  return (
    <SiteLayout>
        <div className='container'>
            <div className='imgContainer'>
                <img src="avatar.png" />
            </div>
            <table>
                <tr>
                    <th>Name</th>
                    <td>John Doe</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>john.doe@example.com</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>+1 234 567 890</td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>123 Main St, Alex, Egypt</td>
                </tr>
            </table>
        </div>
    </SiteLayout>
  )
}

export default Profile