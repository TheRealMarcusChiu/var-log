---
publish: true
title: Multivariable／Multi-Variable／Multivariate Calculus／Analysis
created: 2021-09-13T05:25:11.800-05:00
modified: 2024-01-08T11:25:14.531-06:00
---

###### Multivariable/Multi-Variable/Multivariate Calculus/Analysis

```excerpt
- sometimes synonymous with [[Vector Calculus - Vector Analysis|vector calculus]]
- is the extension of [[Calculus|calculus]] from [[Single-Variable／Univariate Functions|univariate functions]] to [[Multi-Variable／Multivariable／Multivariate Functions|multivariate functions]]
- is an extension of [[Vector Algebra|vector algebra]] (that incorporates [[Differential Calculus|differentiation]] and [[Integral／Integration／Integrable Calculus|integration]])
- is the [[Differential Calculus|differentiation]] and [[Integral／Integration／Integrable Calculus|integration]] of functions involving several variables, rather than just one
- is concerned with the [[Differential Calculus|differentiation]] and [[Integral／Integration／Integrable Calculus|integration]] of [[Vector-Valued Functions - Vector Fields|vector fields]]
	- see [[Tensor Calculus - Tensor Analysis - Ricci Calculus|Tensor Calculus]] for the extension to [[Tensor-Valued Functions - Tensor Fields|tensor fields]]
- a branch of [[Mathematics|mathematics]] that deals with quantities that have both magnitude and direction
- some physical and geometric quantities, called scalars, can be fully defined by specifying their magnitude in suitable units of measure
```

^excerpt

# Multi-Variate Calculus - Derivative - Preliminary

- [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)]]
- [[Derivative of Vector-Valued Function (Partial Derivative)]]

# Multi-Variate Calculus - Derivative - Building Blocks

Video Lectures: [Div, Grad, and Curl: Vector Calculus Building Blocks for PDEs \[Divergence, Gradient, and Curl\]](https://www.youtube.com/watch?v=lKXW7DRyyro\&list=PLMrJAkhIeNNQromC4WswpU1krLOq5Ro6S\&index=2)

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Gradient (𝛻 ｜ 𝛻𝑓)|Gradient (𝛻 | 𝛻𝑓)]]",
        "bg": "#F4F5F7"
      },
      "- takes a scalar-valued function 𝑓 and outputs a vector-valued function",
      "- $\\nabla f = \\begin{bmatrix} \\frac{𝜕}{𝜕x} \\\\ \\frac{𝜕}{𝜕y} \\\\ \\frac{𝜕}{𝜕z} \\\\ \\end{bmatrix} f = \\begin{bmatrix} \\frac{𝜕f}{𝜕x} \\\\ \\frac{𝜕f}{𝜕y} \\\\ \\frac{𝜕f}{𝜕z} \\\\ \\end{bmatrix}$"
    ],
    [
      {
        "content": "[[Divergence (𝛻· ｜ 𝛻·𝑓)|Divergence (𝛻· | 𝛻·𝑓)]]",
        "bg": "#F4F5F7"
      },
      "- takes a vector-valued function 𝑓 and outputs a scalar-valued function",
      "- $\\nabla · \\overline{f} = \\begin{bmatrix} \\frac{𝜕}{𝜕x} \\\\ \\frac{𝜕}{𝜕y} \\\\ \\frac{𝜕}{𝜕z} \\\\ \\end{bmatrix} · \\begin{bmatrix} f_1 \\\\ f_2 \\\\ f_3 \\\\ \\end{bmatrix} = \\frac{𝜕f_1}{𝜕x} + \\frac{𝜕f_2}{𝜕y} + \\frac{𝜕f_3}{𝜕z}$"
    ],
    [
      {
        "content": "[[Curl (𝛻⨯ ｜ 𝛻⨯𝑓)|Curl (𝛻⨯ | 𝛻⨯𝑓)]]",
        "bg": "#F4F5F7"
      },
      "- takes a vector-valued function 𝑓 and outputs a vector-valued function",
      "- $\\nabla ⨯ \\overline{f} = \\begin{bmatrix} \\frac{𝜕f_3}{𝜕y} - \\frac{𝜕f_2}{𝜕z} \\\\ \\frac{𝜕f_1}{𝜕z} - \\frac{𝜕f_3}{𝜕x} \\\\ \\frac{𝜕f_2}{𝜕x} - \\frac{𝜕f_1}{𝜕y} \\\\ \\end{bmatrix}$"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Derivative of Vector-Valued Function (Partial Derivative)]]",
        "bg": "#F4F5F7"
      },
      "- takes a vector-valued function 𝑓 and outputs a vector-valued function",
      "- $\\frac{df}{dt} = \\begin{bmatrix} \\frac{df_1}{dt} \\\\ \\frac{df_2}{dt} \\\\ \\frac{df_3}{dt} \\\\ \\end{bmatrix}$"
    ],
    [
      {
        "content": "[[Curvature Formula|Curvature]]",
        "bg": "#F4F5F7"
      },
      "- takes a vector-valued function 𝑓 and outputs a scalar-valued function",
      ""
    ]
  ]
}
```

# Multi-Variate Calculus - Derivative - Compound Blocks

```merge-table
{
  "rows": [
    [
      {
        "content": "𝛻⨯𝛻𝑓 = 0 for all 𝑓",
        "bg": "#F4F5F7"
      },
      "- the <em>curl</em> of the <em>gradient</em> is always equal to 0",
      ""
    ],
    [
      {
        "content": "𝛻·𝛻⨯𝑓 = 0 for all 𝑓",
        "bg": "#F4F5F7"
      },
      "- the divergence of the curl is always equal to 0",
      ""
    ],
    [
      {
        "content": "[[Laplacian Operator (𝛻·𝛻 ｜ 𝛻·𝛻𝑓 ｜ 𝛻² ｜ 𝛻²𝑓 ｜ 𝛥 ｜ 𝛥𝑓)|Laplacian (𝛻·𝛻 | 𝛻·𝛻𝑓)]]",
        "bg": "#F4F5F7"
      },
      "- takes a scalar-valued function 𝑓 and outputs a scalar-valued function",
      "- $\\nabla · \\nabla f = \\begin{bmatrix} \\frac{𝜕}{𝜕x} \\\\ \\frac{𝜕}{𝜕y} \\\\ \\frac{𝜕}{𝜕z} \\\\ \\end{bmatrix} · \\begin{bmatrix} \\frac{𝜕}{𝜕x} \\\\ \\frac{𝜕}{𝜕y} \\\\ \\frac{𝜕}{𝜕z} \\\\ \\end{bmatrix} f = \\begin{bmatrix} \\frac{𝜕}{𝜕x} \\\\ \\frac{𝜕}{𝜕y} \\\\ \\frac{𝜕}{𝜕z} \\\\ \\end{bmatrix} · \\begin{bmatrix} \\frac{𝜕f}{𝜕x} \\\\ \\frac{𝜕f}{𝜕y} \\\\ \\frac{𝜕f}{𝜕z} \\\\ \\end{bmatrix} = \\frac{𝜕^2f}{𝜕x^2} + \\frac{𝜕^2f}{𝜕y^2} + \\frac{𝜕^2f}{𝜕z^2} = \\nabla^2 f$"
    ],
    [
      {
        "content": "[[Jacobian Matrix|Jacobian]]",
        "bg": "#F4F5F7"
      },
      "- takes a vector-valued function and outputs a matrix-valued function",
      ""
    ],
    [
      {
        "content": "[[Hessian／Hesse Matrix|Hessian]]",
        "bg": "#F4F5F7"
      },
      "- takes a vector-valued function and outputs a matrix-valued function",
      ""
    ]
  ]
}
```

# Multi-Variate Calculus - Derivative - Applications

TODO <https://www.khanacademy.org/math/multivariable-calculus/applications-of-multivariable-derivatives>

# Multi-Variate Calculus - Integral

TODO <https://www.khanacademy.org/math/multivariable-calculus/integrating-multivariable-functions>

- [[Line Integral - Path／Curve／Curvilinear Integral|Line Integral - Path/Curve/Curvilinear Integral]]
- [[Surface Integral]]
- [[Volume Integral]]

# Multi-Variate Calculus - The Fundamental Theorem of Calculus, Green's Theorem, Divergence Theorem, Stoke's Theorem

1. [[The First／Second／Third Fundamental Theorem of Calculus (Part I, II, and III)|The First/Second/Third Fundamental Theorem of Calculus (Part I, II, and III)]]
2. [[Green's Theorem]]
3. 2D [[Guass's Divergence Theorem|Divergence Theorem]] & 3D [[Guass's Divergence Theorem|Divergence Theorem]]
4. [[Stokes' Theorem]]

They are the same theorem. Once you have the notion of differential forms, define the operator 𝑑 which takes a form into a form of higher degree, and create the notion of integration of a form on an oriented manifold, you obtain Stokes' theorem which says:

- $\int_X d𝜔 = \int_{∂X} 𝜔$

If 𝜔 is a 0-form, this is the [[The First／Second／Third Fundamental Theorem of Calculus (Part I, II, and III)|fundamental theorem of calculus]]
If 𝜔 is a 1-form, this is [[Green's Theorem|Green's theorem]]

Green’s theorem on the plane can be expressed in two forms, the flux-divergence form and the circulation-curl form.

The divergence theorem is the extension of the flux-divergence form to a closed, orientable 3D surface, and Stoke’s theorem is the extension of the circulation-curl form.

# Resources

- <https://www.khanacademy.org/math/multivariable-calculus>
- [Steve Brunton's Engineering Math: Vector Calculus and Partial Differential Equations](https://www.youtube.com/playlist?list=PLMrJAkhIeNNQromC4WswpU1krLOq5Ro6S)
