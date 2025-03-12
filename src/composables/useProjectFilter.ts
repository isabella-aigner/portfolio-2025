import { ref, computed } from 'vue'
import type { Project, Skill } from '../types'

export function useProjectFilter(projects: Project[], skills: Skill[]) {
  const selectedFilter = ref<string | null>(null)
  const selectedProject = ref<Project | null>(null)

  const filteredProjects = computed(() => {
    if (!selectedFilter.value) return projects
    return projects.filter(project => 
      project.skills.includes(selectedFilter.value!)
    )
  })

  const toggleFilter = (skillCode: string) => {
    selectedFilter.value = selectedFilter.value === skillCode ? null : skillCode
  }

  const toggleProject = (project: Project) => {
    selectedProject.value = selectedProject.value?.id === project.id ? null : project
  }

  const getSkillName = (skillCode: string): string => {
    const skill = skills.find(s => s.code === skillCode)
    return skill ? skill.name : skillCode
  }

  return {
    selectedFilter,
    selectedProject,
    filteredProjects,
    toggleFilter,
    toggleProject,
    getSkillName
  }
}