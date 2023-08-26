import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skillsSet = [
    {
      "title": "Machine Learning", "skillList": ['Classification', 'Regression Models',
        'Neural Networks', 'Support Vector Machines', 'Random Forest', 'Clustering',],
      "imgUrl": "assets/img/ml-icon.PNG", "id": "skill-ml"
    },

    {
      "title": "Computer Vision", "skillList": ['Medical Image Analysis',
        'Computed Tomography', 'Image Segmentation', 'Keras', 'PyTorch', 'U-Nets', 'CNN', 'RNN',],
      "imgUrl": "assets/img/computer-vision.jpg", "id": "skill-cv"
    },

    {
      "title": "Natural Language Processing", "skillList": ['NLTK', 'K-means Clustering',
        'HDBSCAN', 'Huggingface Transformers (BERT)', 'Close Domain Q&A', 'Haystack for Q&A',],
      "imgUrl": "assets/img/NLP-icon.PNG", "id": "skill-nlp"
    },

    {
      "title": "Time Series Analysis", "skillList": ['Anomaly detection', 'XGBoost', 'DeepAR',
        'Forcasting', 'Auto-Regression',],
      "imgUrl": "assets/img/time-series-icon.jpg", "id": "skill-tsa"
    },

    {
      "title": "Programming", "skillList": ['Python', 'SQL', 'MongoDB', 'Matlab', 'R', 'Java', 'C',],
      "imgUrl": "assets/img/programming-icon.PNG", "id": "skill-prog"
    },

    {
      "title": "Tools", "skillList": ['Jupyter Notebooks', 'Git', 'Docker', 'Kubeflow', 'AWS',],
      "imgUrl": "assets/img/tools-icon.jpg", "id": "skill-tools"
    },

  ]

  panelOpenState = false;
}

