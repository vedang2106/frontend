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
  FaGlobe
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
    { name: 'Sanitation', issues: 28, resolved: 25, color: 'bg-yellow-500' },
    { name: 'Transportation', issues: 19, resolved: 15, color: 'bg-purple-500' },
    { name: 'Parks & Recreation', issues: 15, resolved: 12, color: 'bg-pink-500' },
    { name: 'Emergency Services', issues: 8, resolved: 7, color: 'bg-red-500' }
  ];

  return (
    <MainLayout>
      {/* Government Header */}
      <section className="bg-black text-white py-8 relative overflow-hidden">
        {/* Background elements matching the landing page */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-neutral-900"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(101,70,235,0.3),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(0,200,255,0.3),transparent_50%)]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <FaShieldAlt className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient text-gradient-blue-purple">Government Dashboard</h1>
                <p className="text-neutral-300">Civic Issue Management System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <FaBell className="w-4 h-4 mr-2" />
                Notifications (3)
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <FaCog className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaUser className="w-4 h-4" />
                </div>
                <span className="text-sm">Admin User</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-neutral-950 border-b border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-neutral-900"></div>
        </div>
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
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-all ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-400'
                    : 'border-transparent text-neutral-400 hover:text-neutral-200 hover:border-neutral-600'
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
      <section className="bg-neutral-950 min-h-screen py-8 relative overflow-hidden">
        {/* Background elements matching the landing page */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-neutral-900"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(101,70,235,0.15),transparent_50%)]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 text-white hover:border-primary-500/50 transition-all group relative overflow-hidden">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all duration-700"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-neutral-300 text-sm font-medium">Total Issues</p>
                        <p className="text-3xl font-bold text-white">{stats.totalIssues.toLocaleString()}</p>
                      </div>
                      <FaClipboardCheck className="w-8 h-8 text-primary-400" />
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-green-400">+12%</span>
                      <span className="text-neutral-400 ml-2">from last month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 text-white hover:border-accent-500/50 transition-all group relative overflow-hidden">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent-500/10 rounded-full blur-2xl group-hover:bg-accent-500/20 transition-all duration-700"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-neutral-300 text-sm font-medium">Resolved Today</p>
                        <p className="text-3xl font-bold text-white">{stats.resolvedToday}</p>
                      </div>
                      <FaCheckCircle className="w-8 h-8 text-accent-400" />
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-green-400">+8%</span>
                      <span className="text-neutral-400 ml-2">efficiency increase</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 text-white hover:border-secondary-500/50 transition-all group relative overflow-hidden">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-2xl group-hover:bg-secondary-500/20 transition-all duration-700"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-neutral-300 text-sm font-medium">Pending Review</p>
                        <p className="text-3xl font-bold text-white">{stats.pendingReview}</p>
                      </div>
                      <FaClock className="w-8 h-8 text-secondary-400" />
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-yellow-400">-5%</span>
                      <span className="text-neutral-400 ml-2">from yesterday</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 text-white hover:border-primary-500/50 transition-all group relative overflow-hidden">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all duration-700"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-neutral-300 text-sm font-medium">Avg Response Time</p>
                        <p className="text-3xl font-bold text-white">{stats.avgResponseTime}</p>
                      </div>
                      <FaChartBar className="w-8 h-8 text-primary-400" />
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-green-400">-15%</span>
                      <span className="text-neutral-400 ml-2">improvement</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Department Performance */}
              <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <FaBuilding className="w-5 h-5 mr-2 text-primary-400" />
                    Department Performance
                  </CardTitle>
                  <CardDescription className="text-neutral-400">
                    Issue resolution performance by department
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {departments.map((dept, index) => (
                      <div key={index} className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-4 hover:border-primary-500/50 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-white">{dept.name}</h4>
                          <div className={`w-3 h-3 rounded-full ${dept.color}`}></div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-400">Total Issues</span>
                            <span className="font-medium text-white">{dept.issues}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-400">Resolved</span>
                            <span className="font-medium text-green-400">{dept.resolved}</span>
                          </div>
                          <div className="w-full bg-neutral-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${dept.color}`}
                              style={{ width: `${(dept.resolved / dept.issues) * 100}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-neutral-500 text-right">
                            {Math.round((dept.resolved / dept.issues) * 100)}% resolved
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <FaClock className="w-5 h-5 mr-2 text-primary-400" />
                      Recent Issues
                    </CardTitle>
                    <CardDescription className="text-neutral-400">
                      Latest citizen reports requiring attention
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentIssues.slice(0, 3).map((issue, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:border-primary-500/50 transition-all">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            issue.priority === 'High' ? 'bg-red-500' :
                            issue.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                          }`}></div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">{issue.title}</p>
                            <p className="text-xs text-neutral-400">{issue.category} • {issue.location}</p>
                            <p className="text-xs text-neutral-500">Reported by {issue.reportedBy} • {issue.reportedAt}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              issue.status === 'Resolved' ? 'bg-green-900/50 text-green-400 border border-green-800' :
                              issue.status === 'In Progress' ? 'bg-blue-900/50 text-blue-400 border border-blue-800' :
                              'bg-yellow-900/50 text-yellow-400 border border-yellow-800'
                            }`}>
                              {issue.status}
                            </span>
                            <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white">
                              <FaEye className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white">
                      View All Issues
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <FaChartBar className="w-5 h-5 mr-2 text-accent-400" />
                      Quick Actions
                    </CardTitle>
                    <CardDescription className="text-neutral-400">
                      Common administrative tasks
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-primary-500/50">
                        <FaSearch className="w-6 h-6 text-primary-400" />
                        <span className="text-sm">Search Issues</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-accent-500/50">
                        <FaFilter className="w-6 h-6 text-accent-400" />
                        <span className="text-sm">Filter Reports</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-secondary-500/50">
                        <FaDownload className="w-6 h-6 text-secondary-400" />
                        <span className="text-sm">Export Data</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-primary-500/50">
                        <FaComments className="w-6 h-6 text-primary-400" />
                        <span className="text-sm">Send Updates</span>
                      </Button>
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
              <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search issues..."
                          className="w-full pl-10 pr-4 py-2 bg-neutral-800 border border-neutral-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder-neutral-400"
                        />
                      </div>
                    </div>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="px-4 py-2 bg-neutral-800 border border-neutral-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="all">All Departments</option>
                      <option value="public-works">Public Works</option>
                      <option value="utilities">Utilities</option>
                      <option value="sanitation">Sanitation</option>
                      <option value="transportation">Transportation</option>
                    </select>
                    <Button className="px-6 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600">
                      <FaFilter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Issues Table */}
              <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-white">Issue Management</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Manage and track all citizen-reported issues
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-neutral-700">
                          <th className="text-left py-3 px-4 font-medium text-neutral-300">ID</th>
                          <th className="text-left py-3 px-4 font-medium text-neutral-300">Title</th>
                          <th className="text-left py-3 px-4 font-medium text-neutral-300">Category</th>
                          <th className="text-left py-3 px-4 font-medium text-neutral-300">Priority</th>
                          <th className="text-left py-3 px-4 font-medium text-neutral-300">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-neutral-300">Assigned To</th>
                          <th className="text-left py-3 px-4 font-medium text-neutral-300">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentIssues.map((issue, index) => (
                          <tr key={index} className="border-b border-neutral-800 hover:bg-neutral-800/50">
                            <td className="py-3 px-4 text-sm font-mono text-neutral-400">{issue.id}</td>
                            <td className="py-3 px-4">
                              <div>
                                <p className="font-medium text-white">{issue.title}</p>
                                <p className="text-sm text-neutral-400 flex items-center">
                                  <FaMapMarkerAlt className="w-3 h-3 mr-1" />
                                  {issue.location}
                                </p>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-neutral-400">{issue.category}</td>
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
                            <td className="py-3 px-4 text-sm text-neutral-400">{issue.assignedTo}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white">
                                  <FaEye className="w-3 h-3" />
                                </Button>
                                <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white">
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
                    <p className="text-sm text-neutral-400">Showing 1-10 of 1,247 issues</p>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white">Previous</Button>
                      <Button variant="outline" size="sm" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white">Next</Button>
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
                <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
                  <CardHeader>
                    <CardTitle className="text-white">Issue Trends</CardTitle>
                    <CardDescription className="text-neutral-400">Monthly issue reporting trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-neutral-800 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <FaChartBar className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                        <p className="text-neutral-500">Chart visualization would go here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
                  <CardHeader>
                    <CardTitle className="text-white">Response Time Analysis</CardTitle>
                    <CardDescription className="text-neutral-400">Average resolution times by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { category: 'Infrastructure', avgTime: '4.2 hours', color: 'bg-blue-500' },
                        { category: 'Utilities', avgTime: '2.8 hours', color: 'bg-green-500' },
                        { category: 'Sanitation', avgTime: '1.5 hours', color: 'bg-yellow-500' },
                        { category: 'Transportation', avgTime: '6.1 hours', color: 'bg-purple-500' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full ${item.color} mr-3`}></div>
                            <span className="text-sm font-medium text-white">{item.category}</span>
                          </div>
                          <span className="text-sm text-neutral-400">{item.avgTime}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-white">Citizen Satisfaction Metrics</CardTitle>
                  <CardDescription className="text-neutral-400">Overall satisfaction and feedback analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">94%</div>
                      <p className="text-sm text-neutral-400">Overall Satisfaction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-400 mb-2">4.7/5</div>
                      <p className="text-sm text-neutral-400">Average Rating</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-400 mb-2">1,247</div>
                      <p className="text-sm text-neutral-400">Total Reviews</p>
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
                {departments.map((dept, index) => (
                  <Card key={index} className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-primary-500/50 transition-all">
                    <CardHeader>
                      <CardTitle className="flex items-center text-white">
                        <div className={`w-4 h-4 rounded-full ${dept.color} mr-3`}></div>
                        {dept.name}
                      </CardTitle>
                      <CardDescription className="text-neutral-400">
                        Department performance overview
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-sm text-neutral-400">Total Issues</span>
                          <span className="font-medium text-white">{dept.issues}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-neutral-400">Resolved</span>
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
                      <Button variant="outline" className="w-full border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Citizen Engagement Tab */}
          {activeTab === 'citizens' && (
            <div className="space-y-6">
              <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-white">Citizen Engagement Overview</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Track citizen participation and feedback
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">2,847</div>
                      <p className="text-sm text-neutral-400">Active Citizens</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">1,247</div>
                      <p className="text-sm text-neutral-400">Issues Reported</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">94%</div>
                      <p className="text-sm text-neutral-400">Satisfaction Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-2">156</div>
                      <p className="text-sm text-neutral-400">Pending Reviews</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Citizen Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: 'John Smith', feedback: 'Great response time on the pothole fix!', rating: 5, time: '2 hours ago' },
                        { name: 'Sarah Johnson', feedback: 'The streetlight was fixed quickly. Thank you!', rating: 5, time: '4 hours ago' },
                        { name: 'Mike Davis', feedback: 'Garbage collection issue resolved promptly.', rating: 4, time: '1 day ago' }
                      ].map((feedback, index) => (
                        <div key={index} className="border-l-4 border-primary-500 pl-4 py-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm text-white">{feedback.name}</span>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <FaCheckCircle 
                                  key={i} 
                                  className={`w-3 h-3 ${i < feedback.rating ? 'text-yellow-400' : 'text-neutral-600'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-neutral-400 mb-1">{feedback.feedback}</p>
                          <p className="text-xs text-neutral-500">{feedback.time}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
                  <CardHeader>
                    <CardTitle className="text-white">Communication Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full justify-start border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white">
                        <FaComments className="w-4 h-4 mr-2" />
                        Send Bulk Updates
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white">
                        <FaBell className="w-4 h-4 mr-2" />
                        Notification Center
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white">
                        <FaFileAlt className="w-4 h-4 mr-2" />
                        Generate Reports
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white">
                        <FaDownload className="w-4 h-4 mr-2" />
                        Export Data
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="space-y-6">
              <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-white">Report Generation</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Generate comprehensive reports for stakeholders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-primary-500/50 transition-all cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <FaFileAlt className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                        <h3 className="font-semibold mb-2 text-white">Monthly Summary</h3>
                        <p className="text-sm text-neutral-400 mb-4">Comprehensive monthly performance report</p>
                        <Button variant="outline" className="w-full border-neutral-600 text-neutral-300 hover:bg-neutral-700 hover:text-white">Generate</Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-accent-500/50 transition-all cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <FaChartBar className="w-12 h-12 text-green-400 mx-auto mb-4" />
                        <h3 className="font-semibold mb-2 text-white">Analytics Report</h3>
                        <p className="text-sm text-neutral-400 mb-4">Detailed analytics and trends</p>
                        <Button variant="outline" className="w-full border-neutral-600 text-neutral-300 hover:bg-neutral-700 hover:text-white">Generate</Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-secondary-500/50 transition-all cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <FaUsers className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="font-semibold mb-2 text-white">Citizen Engagement</h3>
                        <p className="text-sm text-neutral-400 mb-4">Citizen participation metrics</p>
                        <Button variant="outline" className="w-full border-neutral-600 text-neutral-300 hover:bg-neutral-700 hover:text-white">Generate</Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-white">Recent Reports</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Previously generated reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Monthly Summary - December 2024', date: 'Dec 31, 2024', size: '2.4 MB', type: 'PDF' },
                      { name: 'Analytics Report - Q4 2024', date: 'Dec 30, 2024', size: '1.8 MB', type: 'PDF' },
                      { name: 'Citizen Engagement - December', date: 'Dec 29, 2024', size: '1.2 MB', type: 'PDF' }
                    ].map((report, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-lg hover:border-primary-500/50 transition-all">
                        <div className="flex items-center">
                          <FaFileAlt className="w-8 h-8 text-red-400 mr-4" />
                          <div>
                            <p className="font-medium text-white">{report.name}</p>
                            <p className="text-sm text-neutral-400">{report.date} • {report.size}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white">
                            <FaEye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white">
                            <FaDownload className="w-4 h-4" />
                          </Button>
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
