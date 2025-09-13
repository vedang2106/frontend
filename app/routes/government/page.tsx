"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { 
  FaChartBar, 
  FaUsers, 
  FaClipboardCheck, 
  FaCog, 
  FaBell, 
  FaSearch,
  FaFilter,
  FaDownload,
  FaEye,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaBuilding,
  FaShieldAlt,
  FaChartLine,
  FaRoute,
  FaComments,
  FaFileAlt,
  FaDatabase,
  FaMobileAlt,
  FaDesktop,
  FaCloud,
  FaLock,
  FaGlobe,
  FaHeart
} from "react-icons/fa";
import MainLayout from "../../../components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";

export default function GovernmentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Mock data for demonstration
  const stats = {
    totalIssues: 1247,
    resolvedToday: 23,
    pendingReview: 156,
    avgResponseTime: '2.3 hours',
    citizenSatisfaction: 94,
    departments: 8
  };

  const recentIssues = [
    {
      id: 'ISS-001',
      title: 'Pothole on Main Street',
      category: 'Infrastructure',
      priority: 'High',
      status: 'In Progress',
      location: 'Downtown District',
      reportedBy: 'John Smith',
      reportedAt: '2 hours ago',
      assignedTo: 'Public Works',
      estimatedResolution: '24 hours'
    },
    {
      id: 'ISS-002',
      title: 'Streetlight Outage',
      category: 'Utilities',
      priority: 'Medium',
      status: 'Pending',
      location: 'Residential Area',
      reportedBy: 'Sarah Johnson',
      reportedAt: '4 hours ago',
      assignedTo: 'Electrical Dept',
      estimatedResolution: '48 hours'
    },
    {
      id: 'ISS-003',
      title: 'Garbage Collection Missed',
      category: 'Sanitation',
      priority: 'Low',
      status: 'Resolved',
      location: 'Suburb District',
      reportedBy: 'Mike Davis',
      reportedAt: '1 day ago',
      assignedTo: 'Sanitation Dept',
      estimatedResolution: 'Completed'
    }
  ];

  const departments = [
    { name: 'Public Works', issues: 45, resolved: 38, color: 'bg-blue-500' },
    { name: 'Utilities', issues: 32, resolved: 28, color: 'bg-green-500' },
    { name: 'Sanitation', issues: 28, resolved: 25, color: 'bg-orange-500' },
    { name: 'Transportation', issues: 19, resolved: 15, color: 'bg-blue-600' },
    { name: 'Parks & Recreation', issues: 15, resolved: 12, color: 'bg-green-600' },
    { name: 'Emergency Services', issues: 8, resolved: 7, color: 'bg-orange-600' }
  ];

  // Data for overview cards
  const overviewCards = [
    {
      title: "Total Issues",
      description: `${stats.totalIssues.toLocaleString()} issues reported with +12% increase from last month`,
      link: "#total-issues",
      icon: FaClipboardCheck,
      value: stats.totalIssues.toLocaleString(),
      change: "+12% from last month"
    },
    {
      title: "Resolved Today", 
      description: `${stats.resolvedToday} issues resolved with +8% efficiency increase`,
      link: "#resolved-today",
      icon: FaCheckCircle,
      value: stats.resolvedToday.toString(),
      change: "+8% efficiency"
    },
    {
      title: "Pending Review",
      description: `${stats.pendingReview} issues pending review with -5% decrease from yesterday`,
      link: "#pending-review",
      icon: FaClock,
      value: stats.pendingReview.toString(),
      change: "-5% from yesterday"
    },
    {
      title: "Avg Response Time",
      description: `${stats.avgResponseTime} average response time with -15% improvement`,
      link: "#response-time",
      icon: FaChartLine,
      value: stats.avgResponseTime,
      change: "-15% improvement"
    },
    {
      title: "Citizen Satisfaction",
      description: `${stats.citizenSatisfaction}% satisfaction rate with excellent feedback`,
      link: "#citizen-satisfaction",
      icon: FaHeart,
      value: `${stats.citizenSatisfaction}%`,
      change: "Excellent feedback"
    },
    {
      title: "Active Departments",
      description: `${stats.departments} departments actively managing civic issues`,
      link: "#active-departments",
      icon: FaBuilding,
      value: stats.departments.toString(),
      change: "Active management"
    }
  ];

  // Data for department cards
  const departmentCards = departments.map((dept, index) => ({
    name: dept.name,
    title: dept.name,
    description: `${dept.issues} total issues, ${dept.resolved} resolved (${Math.round((dept.resolved / dept.issues) * 100)}% completion rate)`,
    link: `#department-${dept.name.toLowerCase().replace(/\s+/g, '-')}`,
    color: dept.color,
    issues: dept.issues,
    resolved: dept.resolved,
    percentage: Math.round((dept.resolved / dept.issues) * 100),
    icon: FaBuilding
  }));

  return (
    <MainLayout>
      {/* Government Header */}
      <section className="bg-black py-8">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-600 rounded-sm"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Government Dashboard</h1>
                <p className="text-sm text-gray-300">Civic Issue Management System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center gap-2 px-3 py-2 border border-white rounded-lg hover:bg-gray-800 transition-all">
                <FaBell className="w-4 h-4 text-white" />
                <span className="text-sm text-white">Notifications (3)</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 border border-white rounded-lg hover:bg-gray-800 transition-all">
                <FaCog className="w-4 h-4 text-white" />
                <span className="text-sm text-white">Settings</span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <FaUser className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-white">Admin User</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-black border-b border-gray-700">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: FaChartBar },
              { id: 'issues', label: 'Issue Management', icon: FaClipboardCheck },
              { id: 'analytics', label: 'Analytics', icon: FaChartLine },
              { id: 'departments', label: 'Departments', icon: FaBuilding },
              { id: 'citizens', label: 'Citizen Engagement', icon: FaUsers },
              { id: 'reports', label: 'Reports', icon: FaFileAlt }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-all ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white min-h-screen py-8 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {overviewCards.map((item, index) => (
                    <Card key={index} className="bg-white border border-gray-200 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center text-gray-800">
                          <item.icon className={`w-5 h-5 mr-2 ${
                            index === 0 ? 'text-blue-500' : index === 1 ? 'text-green-500' : 'text-orange-500'
                          }`} />
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {item.value}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.change}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Department Performance */}
              <Card className="bg-white border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <FaBuilding className="w-5 h-5 mr-2 text-blue-500" />
                    Department Performance
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Issue resolution performance by department
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departmentCards.map((dept, index) => (
                      <div key={index} className="bg-white border border-gray-200 shadow-lg p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-green-100' : index === 2 ? 'bg-orange-100' : 
                              index === 3 ? 'bg-blue-100' : index === 4 ? 'bg-green-100' : 'bg-orange-100'
                            }`}>
                              <dept.icon className={`w-5 h-5 ${
                                index === 0 ? 'text-blue-500' : index === 1 ? 'text-green-500' : index === 2 ? 'text-orange-500' : 
                                index === 3 ? 'text-blue-600' : index === 4 ? 'text-green-600' : 'text-orange-600'
                              }`} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">{dept.name}</h4>
                              <p className="text-sm text-gray-600">{dept.issues} issues</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">{dept.percentage}%</div>
                            <div className="text-xs text-gray-500">resolved</div>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${dept.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-white border border-gray-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-800">
                      <FaClock className="w-5 h-5 mr-2 text-blue-500" />
                      Recent Issues
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Latest citizen reports requiring attention
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentIssues.slice(0, 3).map((issue, index) => (
                        <div key={index}>
                          <div className="flex items-start space-x-3 p-3 bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-lg">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              issue.priority === 'High' ? 'bg-red-500' :
                              issue.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                            }`}></div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-800 truncate">{issue.title}</p>
                              <p className="text-xs text-gray-600">{issue.category} • {issue.location}</p>
                              <p className="text-xs text-gray-500">Reported by {issue.reportedBy} • {issue.reportedAt}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                issue.status === 'Resolved' ? 'bg-green-100 text-green-700 border border-green-300' :
                                issue.status === 'In Progress' ? 'bg-blue-100 text-blue-700 border border-blue-300' :
                                'bg-yellow-100 text-yellow-700 border border-yellow-300'
                              }`}>
                                {issue.status}
                              </span>
                              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-800">
                                <FaEye className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                      View All Issues
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-white border border-gray-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-800">
                      <FaChartBar className="w-5 h-5 mr-2 text-blue-500" />
                      Quick Actions
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Common administrative tasks
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div >
                        <Button variant="outline" className="h-20 w-full flex flex-col items-center justify-center space-y-2 border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                          <FaSearch className="w-6 h-6 text-blue-500" />
                          <span className="text-sm">Search Issues</span>
                        </Button>
                      </div>
                      <div >
                        <Button variant="outline" className="h-20 w-full flex flex-col items-center justify-center space-y-2 border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                          <FaFilter className="w-6 h-6 text-blue-500" />
                          <span className="text-sm">Filter Reports</span>
                        </Button>
                      </div>
                      <div >
                        <Button variant="outline" className="h-20 w-full flex flex-col items-center justify-center space-y-2 border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                          <FaDownload className="w-6 h-6 text-green-500" />
                          <span className="text-sm">Export Data</span>
                        </Button>
                      </div>
                      <div >
                        <Button variant="outline" className="h-20 w-full flex flex-col items-center justify-center space-y-2 border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                          <FaComments className="w-6 h-6 text-blue-500" />
                          <span className="text-sm">Send Updates</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Issue Management Tab */}
          {activeTab === 'issues' && (
            <div className="space-y-6">
              {/* Filters and Search */}
              <Card className="bg-white border border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search issues..."
                          className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                        />
                      </div>
                    </div>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="px-4 py-2 bg-gray-50 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="all">All Departments</option>
                      <option value="public-works">Public Works</option>
                      <option value="utilities">Utilities</option>
                      <option value="sanitation">Sanitation</option>
                      <option value="transportation">Transportation</option>
                    </select>
                    <Button className="px-6 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                      <FaFilter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Issues Table */}
              <Card className="bg-white border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800">Issue Management</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage and track all citizen-reported issues
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-300">
                          <th className="text-left py-3 px-4 font-medium text-gray-700">ID</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Title</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Category</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Priority</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Assigned To</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentIssues.map((issue, index) => (
                          <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm font-mono text-gray-400">{issue.id}</td>
                            <td className="py-3 px-4">
                              <div>
                                <p className="font-medium text-gray-800">{issue.title}</p>
                                <p className="text-sm text-gray-400 flex items-center">
                                  <FaMapMarkerAlt className="w-3 h-3 mr-1" />
                                  {issue.location}
                                </p>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-400">{issue.category}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                issue.priority === 'High' ? 'bg-red-900/50 text-red-400 border border-red-800' :
                                issue.priority === 'Medium' ? 'bg-yellow-900/50 text-yellow-400 border border-yellow-800' :
                                'bg-green-900/50 text-green-400 border border-green-800'
                              }`}>
                                {issue.priority}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                issue.status === 'Resolved' ? 'bg-green-900/50 text-green-400 border border-green-800' :
                                issue.status === 'In Progress' ? 'bg-blue-900/50 text-blue-400 border border-blue-800' :
                                'bg-yellow-900/50 text-yellow-400 border border-yellow-800'
                              }`}>
                                {issue.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-400">{issue.assignedTo}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-800">
                                  <FaEye className="w-3 h-3" />
                                </Button>
                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-800">
                                  <FaEdit className="w-3 h-3" />
                                </Button>
                                <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                                  <FaTrash className="w-3 h-3" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-sm text-gray-400">Showing 1-10 of 1,247 issues</p>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-800">Previous</Button>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-800">Next</Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-white border border-gray-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Issue Trends</CardTitle>
                    <CardDescription className="text-gray-400">Monthly issue reporting trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <FaChartBar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-neutral-500">Chart visualization would go here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Response Time Analysis</CardTitle>
                    <CardDescription className="text-gray-400">Average resolution times by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { category: 'Infrastructure', avgTime: '4.2 hours', color: 'bg-blue-500', hoverColor: 'blue' },
                        { category: 'Utilities', avgTime: '2.8 hours', color: 'bg-green-500', hoverColor: 'green' },
                        { category: 'Sanitation', avgTime: '1.5 hours', color: 'bg-yellow-500', hoverColor: 'yellow' },
                        { category: 'Transportation', avgTime: '6.1 hours', color: 'bg-purple-500', hoverColor: 'purple' }
                      ].map((item, index) => (
                        <div key={index} >
                          <div className="flex items-center justify-between p-3 rounded-lg bg-gray-100/30">
                            <div className="flex items-center">
                              <div className={`w-3 h-3 rounded-full ${item.color} mr-3`}></div>
                              <span className="text-sm font-medium text-gray-800">{item.category}</span>
                            </div>
                            <span className="text-sm text-gray-400">{item.avgTime}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800">Citizen Satisfaction Metrics</CardTitle>
                  <CardDescription className="text-gray-400">Overall satisfaction and feedback analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div >
                      <div className="text-center p-4 rounded-lg bg-gray-100/30">
                        <div className="text-4xl font-bold text-green-400 mb-2">94%</div>
                        <p className="text-sm text-gray-400">Overall Satisfaction</p>
                      </div>
                    </div>
                    <div >
                      <div className="text-center p-4 rounded-lg bg-gray-100/30">
                        <div className="text-4xl font-bold text-blue-400 mb-2">4.7/5</div>
                        <p className="text-sm text-gray-400">Average Rating</p>
                      </div>
                    </div>
                    <div >
                      <div className="text-center p-4 rounded-lg bg-gray-100/30">
                        <div className="text-4xl font-bold text-purple-400 mb-2">1,247</div>
                        <p className="text-sm text-gray-400">Total Reviews</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Departments Tab */}
          {activeTab === 'departments' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.map((dept, index) => {
                  const hoverColors = ['primary', 'accent', 'secondary', 'blue', 'green', 'purple'];
                  const hoverColor = hoverColors[index % hoverColors.length];
                  
                  return (
                    <div key={index} >
                      <Card className="bg-white border border-gray-200 shadow-lg">
                        <CardHeader>
                          <CardTitle className="flex items-center text-gray-800">
                            <div className={`w-4 h-4 rounded-full ${dept.color} mr-3`}></div>
                            {dept.name}
                          </CardTitle>
                          <CardDescription className="text-gray-400">
                            Department performance overview
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-400">Total Issues</span>
                              <span className="font-medium text-gray-800">{dept.issues}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-400">Resolved</span>
                              <span className="font-medium text-green-400">{dept.resolved}</span>
                            </div>
                            <div className="w-full bg-neutral-700 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${dept.color}`}
                                style={{ width: `${(dept.resolved / dept.issues) * 100}%` }}
                              ></div>
                            </div>
                            <div className="text-center text-sm text-neutral-500">
                              {Math.round((dept.resolved / dept.issues) * 100)}% resolution rate
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                            View Details
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Citizen Engagement Tab */}
          {activeTab === 'citizens' && (
            <div className="space-y-6">
              <Card className="bg-white border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800">Citizen Engagement Overview</CardTitle>
                  <CardDescription className="text-gray-400">
                    Track citizen participation and feedback
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div >
                      <div className="text-center p-4 rounded-lg bg-gray-100/30">
                        <div className="text-3xl font-bold text-blue-400 mb-2">2,847</div>
                        <p className="text-sm text-gray-400">Active Citizens</p>
                      </div>
                    </div>
                    <div >
                      <div className="text-center p-4 rounded-lg bg-gray-100/30">
                        <div className="text-3xl font-bold text-green-400 mb-2">1,247</div>
                        <p className="text-sm text-gray-400">Issues Reported</p>
                      </div>
                    </div>
                    <div >
                      <div className="text-center p-4 rounded-lg bg-gray-100/30">
                        <div className="text-3xl font-bold text-purple-400 mb-2">94%</div>
                        <p className="text-sm text-gray-400">Satisfaction Rate</p>
                      </div>
                    </div>
                    <div >
                      <div className="text-center p-4 rounded-lg bg-gray-100/30">
                        <div className="text-3xl font-bold text-blue-600 mb-2">156</div>
                        <p className="text-sm text-gray-400">Pending Reviews</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white border border-gray-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Recent Citizen Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: 'John Smith', feedback: 'Great response time on the pothole fix!', rating: 5, time: '2 hours ago', hoverColor: 'green' },
                        { name: 'Sarah Johnson', feedback: 'The streetlight was fixed quickly. Thank you!', rating: 5, time: '4 hours ago', hoverColor: 'blue' },
                        { name: 'Mike Davis', feedback: 'Garbage collection issue resolved promptly.', rating: 4, time: '1 day ago', hoverColor: 'purple' }
                      ].map((feedback, index) => (
                        <div key={index} >
                          <div className="border-l-4 border-blue-500 pl-4 py-2 rounded-r-lg bg-gray-100/30">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm text-gray-800">{feedback.name}</span>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <FaCheckCircle 
                                    key={i} 
                                    className={`w-3 h-3 ${i < feedback.rating ? 'text-yellow-400' : 'text-neutral-600'}`} 
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-gray-400 mb-1">{feedback.feedback}</p>
                            <p className="text-xs text-neutral-500">{feedback.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Communication Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div >
                        <Button variant="outline" className="w-full justify-start border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                          <FaComments className="w-4 h-4 mr-2" />
                          Send Bulk Updates
                        </Button>
                      </div>
                      <div >
                        <Button variant="outline" className="w-full justify-start border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                          <FaBell className="w-4 h-4 mr-2" />
                          Notification Center
                        </Button>
                      </div>
                      <div >
                        <Button variant="outline" className="w-full justify-start border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                          <FaFileAlt className="w-4 h-4 mr-2" />
                          Generate Reports
                        </Button>
                      </div>
                      <div >
                        <Button variant="outline" className="w-full justify-start border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                          <FaDownload className="w-4 h-4 mr-2" />
                          Export Data
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="space-y-6">
              <Card className="bg-white border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800">Report Generation</CardTitle>
                  <CardDescription className="text-gray-400">
                    Generate comprehensive reports for stakeholders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div >
                      <Card className="bg-gray-100/50 backdrop-blur-sm border border-gray-300 cursor-pointer">
                        <CardContent className="p-6 text-center">
                          <FaFileAlt className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                          <h3 className="font-semibold mb-2 text-gray-800">Monthly Summary</h3>
                          <p className="text-sm text-gray-400 mb-4">Comprehensive monthly performance report</p>
                          <Button variant="outline" className="w-full border-neutral-600 text-gray-700 hover:bg-neutral-700 hover:text-gray-800">Generate</Button>
                        </CardContent>
                      </Card>
                    </div>

                    <div >
                      <Card className="bg-gray-100/50 backdrop-blur-sm border border-gray-300 cursor-pointer">
                        <CardContent className="p-6 text-center">
                          <FaChartBar className="w-12 h-12 text-green-400 mx-auto mb-4" />
                          <h3 className="font-semibold mb-2 text-gray-800">Analytics Report</h3>
                          <p className="text-sm text-gray-400 mb-4">Detailed analytics and trends</p>
                          <Button variant="outline" className="w-full border-neutral-600 text-gray-700 hover:bg-neutral-700 hover:text-gray-800">Generate</Button>
                        </CardContent>
                      </Card>
                    </div>

                    <div >
                      <Card className="bg-gray-100/50 backdrop-blur-sm border border-gray-300 cursor-pointer">
                        <CardContent className="p-6 text-center">
                          <FaUsers className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                          <h3 className="font-semibold mb-2 text-gray-800">Citizen Engagement</h3>
                          <p className="text-sm text-gray-400 mb-4">Citizen participation metrics</p>
                          <Button variant="outline" className="w-full border-neutral-600 text-gray-700 hover:bg-neutral-700 hover:text-gray-800">Generate</Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800">Recent Reports</CardTitle>
                  <CardDescription className="text-gray-400">
                    Previously generated reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Monthly Summary - December 2024', date: 'Dec 31, 2024', size: '2.4 MB', type: 'PDF', hoverColor: 'red' },
                      { name: 'Analytics Report - Q4 2024', date: 'Dec 30, 2024', size: '1.8 MB', type: 'PDF', hoverColor: 'blue' },
                      { name: 'Citizen Engagement - December', date: 'Dec 29, 2024', size: '1.2 MB', type: 'PDF', hoverColor: 'purple' }
                    ].map((report, index) => (
                      <div key={index} >
                        <div className="flex items-center justify-between p-4 bg-gray-100/50 backdrop-blur-sm border border-gray-300 rounded-lg">
                          <div className="flex items-center">
                            <FaFileAlt className="w-8 h-8 text-red-400 mr-4" />
                            <div>
                              <p className="font-medium text-gray-800">{report.name}</p>
                              <p className="text-sm text-gray-400">{report.date} • {report.size}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-800">
                              <FaEye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-800">
                              <FaDownload className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
