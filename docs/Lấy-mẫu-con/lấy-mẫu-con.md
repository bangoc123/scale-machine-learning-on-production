---
sidebar_position: 3
---

# Lấy mẫu con

### Đánh giá hàm mất mát với kỹ thuật lấy mẫu con
---

**1) Vấn đề**

Như các bạn từng nghe tới thuật toán SGD khi đào tạo một mô hình học máy.

<!-- <style>img{max-width: 100%;height: auto;}</style> -->

![](https://storage.googleapis.com/mle-courses-prod/users/61b869ca9c3c5e00292bb42d/private-files/462925c0-1c95-11ed-a55f-6fe8d8510d2e-Screen%20Shot%202022-08-15%20at%2019.24.45.png)


Bảng trên so sánh hai thuật toán đó là Gradient Descent và Stochastic Gradient Descent. Hai thuật toán này đều có mục tiêu tìm ra giá trị **nhỏ nhất có thể** của hàm mất mát.

Với thuật toán SGD ta nhận thấy, với bộ dữ liệu có $10^6$ phần tử thì trong mỗi vòng lặp, ta cũng cần phải tính giá trị hàm mất mát với số lượng tương đương $10^6$ lần.

Rõ ràng dễ dàng nhận thấy nếu có một cơ chế lặp ít hơn để cập nhật bộ tham số thay vì lặp qua toàn bộ.

**2) Cách giải quyết** 

Kỹ thuật lấy mẫu con - **Subsampling**.

Chúng ta có thể dùng kỹ thuật lấy mẫu con để xấp xỉ tốt nhất việc lặp $10^6$ lần bên trên.

Giả sử $Z$ là một biến ngẫu nhiên có giá trị $\partial{cost(\theta, (x^{(i)}, y^{(i)}))}$ có xác suất xảy ra đó là $\frac{1}{n}$. Cho nên ta dễ nhận ra một điều:

$$
E[Z] = \frac{1}{n}\sum_{i=1}^{n}cost(\theta, (x^{(i)}, y^{(i)})) = J(\theta)
$$

Giả sử trong $10^6$ lần tính toán bên trên, ta lấy ra $\bold{K}$ lần ngẫu nhiên những giá trị $Z_1, Z_2, \cdots Z_n$ giống $Z$ bên trên thì trung bình những giá trị này sẽ có thể xấp xỉ  $J(\theta)$. Tức là:

$$
S(K) = \frac{1}{K}\sum_{1}^{K}Z_k \approx J(\theta)
$$

Biểu thức bên trên có thể kết luật dựa theo **luật số lớn** (The law of large numbers) và **định lý giới hạn trung tâm** (Central limit theorem) thì trung bình mẫu lấy ra với **số lượng đủ lớn K** gần với kỳ vọng phân phối của $Z$.

Và câu hỏi đặt ra thì *K* cần lấy ít nhất bao nhiêu là đủ để có thể xấp xỉ giá trị hàm mất mát?

Theo bất đẳng thức **Chebyshev’s** ta chứng minh được như sau:

$$
P(| S_K - E[Z| \geqslant a)  \leqslant  \frac{1}{a^24K}
$$ 

Ta ứng dụng công thức này như thế nào?

Ví dụ, nếu bạn muốn ước lượng giá trị mất mát sao cho xác suất độ lệch giữa trung bình các mẫu với giá trị mất mát thật nhỏ hơn 10% lớn hơn 99%. Thì cần số lượng mẫu ước lượng $K$ là bao nhiêu?

**Lời giải**: Câu hỏi đề bài sẽ được quy về như sau:

$$
P(|S(K) - J(\theta)|  \leqslant  0.1) \geqslant   0.99 \\

\Leftrightarrow P(|S(K) - J(\theta)|  \geqslant  0.1)  \leqslant  0.01
$$

Để điều này xảy ra thì cận trên của $$P(|S(K) - J(\theta)|  \geqslant  0.1)$$ phải nhỏ hơn $0.01$ tức là:

$$
\frac{1}{a^24K} \leqslant  0.01 \\

\Leftrightarrow  K \geqslant \frac{1}{4 \times 0.01^2} = 2500
$$

Vậy cần ít nhất 2500 mẫu để có thể thực hiện được điều này.
















































